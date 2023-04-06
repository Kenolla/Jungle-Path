import { test } from "../Camps/testEvent.js";
import { generateCamps } from "../Camps/camps.js";

let data;
let jungle = test;

//takes in the x y coordinates of a champion and returns the closest jungle camp that they are near
const closestCamp = (current) => {
    let closestCamp = null;
    let closestCordinates = [Infinity, Infinity];
    for(const camp of data.allCamps) {
        if(Math.abs((camp.x - current.x)) + Math.abs((camp.y - current.y)) < Math.abs(closestCordinates[0] - current.x) + Math.abs(closestCordinates[1] - current.y)) {
            closestCamp = camp;
            closestCordinates = [camp.x, camp.y]
        }
    }

    return closestCamp;
}

//returns the path with the camps in order based on the direction the jungler is going.
const path = (firstP, secondP) => {
    let jungles = [closestCamp(firstP).jg, closestCamp(secondP).jg]
    for(const path of data.allPaths) {
        if(jungles.join('t') === path.name) return path.camps
    }

    return null;
}

const noInvade = (id) => {
    return !jungle.getCharStat(id, 'xp', 1);
}

const hasGanked = (events, jungleId) => {
    for(const event of events) {
        if('bounty' in event) {
            if('assistingParticipantIds' in event) {
                for(const id of event.assistingParticipantIds) {
                    if(id === jungleId) return closestCamp(event.position);
                }
            }
            if(event.killerId === jungleId) return closestCamp(event.position);
        }
    }

    return null;
}

const hasGankedEarly = (events, jungleId) => {
    for(const event of events) {
        if('bounty' in event) {
            if('assistingParticipantIds' in event) {
                for(const id of event.assistingParticipantIds) {
                    if(id === jungleId) {
                        let time = event.timestamp;
                        time = time / 1000
                        time = Math.trunc(time);
                        time = time / 60
                        time = time - Math.floor(time);
                        if(time < 0.17) return closestCamp(event.position);
                    }
                }
            }
            if(event.killerId === jungleId) {
                let time = event.timestamp;
                time = time / 1000
                time = Math.trunc(time);
                time = time / 60
                time = time - Math.floor(time);
                if(time < 0.17) return closestCamp(event.position);
            } 
        }
    }
    
    return null;
}

const generatePath = (side) => {
    data = side === 2 ? generateCamps('BS') : generateCamps('RS');
    let possibleCamps = path(jungle.getCharStat(side, 'position', 2), jungle.getCharStat(side, 'position', 3));//put the location of the second and third minute respectively 
    let currentXP = jungle.getCharStat(side, 'xp', 2) - 150;//second minute xp
    let jungleCS = jungle.getCharStat(side, 'jungleMinionsKilled', 2);
    
    //Second Minute Tick
    let junglePath = [];
    let currentLocation = [possibleCamps[0], possibleCamps[1], possibleCamps[2]]
    //This section finds the first camp and pushes it to the list
    if(noInvade(side)) {
        for(let i = 0; i < currentLocation.length; i++) {
            let runningXP = currentLocation[i].xp;
            if(currentXP === runningXP) {
                junglePath.push(possibleCamps[i]);
                possibleCamps.splice(i, 1);
                break;
            }
            for(let j = i + 1; j < currentLocation.length; j++) {
                if(currentXP === runningXP + currentLocation[j].xp) {
                    junglePath.push(possibleCamps[i], possibleCamps[j])
                    possibleCamps.splice(i, 1);
                    possibleCamps.splice(j - 1, 1);
                    break;
                }
            }
        }
    } else if(jungleCS % 4 === 0) {
        while(jungleCS > 0) {
            jungleCS -= 4;
            let camp = possibleCamps.shift();
            junglePath.push(camp);
        }
    } else {
        return null;
    }

    //Third Minute Tick
    //If they've ganked add the lane
    jungleCS = jungle.getCharStat(side, 'jungleMinionsKilled', 3) - jungle.getCharStat(side, 'jungleMinionsKilled', 2) //tick3CS - last tick CS
    let gankedLane = hasGankedEarly(jungle.getEventFrames(3), side)
    if(gankedLane !== null) {
        junglePath.push('kill')
        junglePath.push(gankedLane)
    }

    let currentCamp = jungleCS % 4;
    jungleCS = jungleCS - currentCamp;
    while(jungleCS > 0) {
        jungleCS -= 4;
        let camp = possibleCamps.shift();
        junglePath.push(camp);
    }

    if(currentCamp !== 0) {
        let camp = closestCamp(jungle.getCharStat(side, 'position', 3))//Tick Three X, Y Value here;
        for(let i = 0; i < possibleCamps.length; i++) {
            if(camp === possibleCamps[i]) {
                junglePath.push(possibleCamps[i]);
                possibleCamps.splice(i, 1);
                break;
            }
        }
    }

    if(gankedLane === null) {
        gankedLane = hasGanked(jungle.getEventFrames(4), side)
        if(gankedLane !== null) {
            junglePath.push('kill')
            junglePath.push(gankedLane)
        }
    }

    //Fourth Minute Tick
    jungleCS = jungle.getCharStat(side, 'jungleMinionsKilled', 4) - jungle.getCharStat(side, 'jungleMinionsKilled', 3) //tick4CS - last tick CS
    currentCamp = jungleCS % 4;
    jungleCS = jungleCS - currentCamp;

    gankedLane = hasGankedEarly(jungle.getEventFrames(4), side)
    if(gankedLane !== null) {
        junglePath.push('kill')
        junglePath.push(gankedLane)
    }

    while(jungleCS > 0 && possibleCamps.length) {
        jungleCS -= 4;
        let camp = possibleCamps.shift();
        junglePath.push(camp);
    }

    if(currentCamp !== 0) {
        let camp = closestCamp(jungle.getCharStat(side, 'position', 4))
        for(let i = 0; i < possibleCamps.length; i++) {
            if(camp === possibleCamps[i]) {
                junglePath.push(possibleCamps[i]);
                possibleCamps.splice(i, 1);
                break;
            }
        }
    }

    if(gankedLane === null) {
        gankedLane = hasGanked(jungle.getEventFrames(4), side)
        if(gankedLane !== null) {
            junglePath.push('kill')
            junglePath.push(gankedLane)
        }
    }

    return junglePath
}


console.log(generatePath(7)) 

