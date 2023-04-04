import { testData } from "../Camps/testEvent.js";
import { generateCamps } from "../Camps/camps.js";

let data = generateCamps('RS')


//takes in the x y coordinates of a champion and returns the closest jungle camp that they are near
const closestCamp = (x, y) => {
    let closestCamp = null;
    let closestCordinates = [Infinity, Infinity];
    for(const camp of data.allCamps) {
        if(Math.abs((camp.x - x)) + Math.abs((camp.y - y)) < Math.abs(closestCordinates[0] - x) + Math.abs(closestCordinates[1] - y)) {
            closestCamp = camp;
            closestCordinates = [camp.x, camp.y]
        }
    }

    return closestCamp;
}

//returns the path with the camps in order based on the direction the jungler is going.
const path = (firstP, secondP) => {
    let jungles = [closestCamp(firstP[0], firstP[1]).jg, closestCamp(secondP[0], secondP[1]).jg]
    for(const path of data.allPaths) {
        if(jungles.join('t') === path.name) return path.camps
    }

    return null;
}

const noInvade = () => {
    return true;
}
const hasGanked = (events, jungleId) => {
    for(const event of events) {
        if('bounty' in event) {
            if('assistingParticipantIds' in event) {
                for(const id of event.assistingParticipantIds) {
                    if(id === jungleId) return closestCamp(event.position.x, event.position.y);
                }
            }
            if(event.killerId === jungleId) return closestCamp(event.position.x, event.position.y);
        }
    }

    return null;
}

let possibleCamps = path([3159, 8157], [7000, 4682]);//put the location of the second and third minute respectively 
let currentXP = 310 - 150;//second minute xp
const generatePath = () => {
    let jungleCS;
    //Second Minute Tick
    let junglePath = [];
    let currentLocation = [possibleCamps[0], possibleCamps[1], possibleCamps[2]]
    //This section finds the first camp and pushes it to the list
    if(noInvade()) {
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
        while(jungleCS > 4) {
            jungleCS -= 4;
            let camp = possibleCamps.shift();
            junglePath.push(camp);
        }
    } else {
        return null;
    }

    //Third Minute Tick
    //If they've ganked add the lane
    jungleCS = 10 //tick3CS - last tick CS

    let gankedLane = hasGanked(testData, 7)
    if(gankedLane !== null) junglePath.push(gankedLane)

    let currentCamp = jungleCS % 4;
    jungleCS = jungleCS - currentCamp;
    while(jungleCS > 0) {
        jungleCS -= 4;
        let camp = possibleCamps.shift();
        junglePath.push(camp);
    }

    if(currentCamp !== 0) {
        let camp = closestCamp(7000, 4682)//Tick Three X, Y Value here;
        for(let i = 0; i < possibleCamps.length; i++) {
            if(camp === possibleCamps[i]) {
                junglePath.push(possibleCamps[i]);
                possibleCamps.splice(i, 1);
                break;
            }
        }
    }

    //Fourth Minute Tick
    jungleCS = 4 //tick4CS - last tick CS
    currentCamp = jungleCS % 4;
    jungleCS = jungleCS - currentCamp;
    while(jungleCS > 0 && possibleCamps.length) {
        jungleCS -= 4;
        let camp = possibleCamps.shift();
        junglePath.push(camp);
    }
    gankedLane = hasGanked(testData, 7)
    if(gankedLane !== null) junglePath.push(gankedLane)

    return junglePath
}

// console.log(direction([3159, 8157], [7000, 4682]))
// console.log(path([3159, 8157], [7000, 4682]))
// console.log(closestCamp(3159, 8157))
// console.log(closestCamp(7000, 4682))

console.log(generatePath()) 

