class Camp {
    constructor(name, x, y, xp, jg) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.xp = xp;
        this.jg = jg;
    }
}

class Path {
    constructor(name, camps) {
        this.name = name;
        this.camps = camps;
    }
}

let bRed = 'BSBJ';
let bBlue = 'BSTJ';
let rRed = 'RSTJ';
let rBlue = 'RSBJ';
let side = 'RS';


let bBramble = new Camp('Bramble', 7500, 3200, 175, bRed);
let bKrugs = new Camp('Krugs', 8200, 2700, 201, bRed);
let bRaptors = new Camp('Raptors', 7000, 4800, 150, bRed);
let bWolves = new Camp('Wolves', 3200, 6700, 160, bBlue);
let bSentinal = new Camp('Sentinal', 3200, 8150, 175, bBlue);
let bGromp = new Camp('Gromp', 2400, 8350, 200, bBlue);

let rSentinal = new Camp('Sentinal', 11400, 6900, 175, rBlue);
let rGromp = new Camp('Gromp', 12300, 6700, 200, rBlue);
let rWolves = new Camp('Wolves', 11300, 8300, 160 ,rBlue);
let rRaptors = new Camp('Raptors', 8000, 10200, 150, rRed);
let rBramble = new Camp('Bramble', 7500, 11800, 175, rRed);
let rKrugs = new Camp('Krugs', 6800, 12300, 201, rRed);

let tScuttle = new Camp('Scuttle', 5000, 9500, 'tRriver');
let bScuttle = new Camp('Scuttle', 10000, 55000, 'bRiver');

let mid = new Camp('Mid Lane', 7500, 7500, 0, `${side}TJ`);
let top = new Camp('Top Lane', 2500, 12500, 0, `${side}TJ`);
let bot = new Camp('Bot Lane', 12700, 2500, 0, `${side}BJ`);
let bBase = new Camp('Blue Base', 550, 550, 0, null);
let rBase = new Camp('Red Base', 1450, 1450, 0, null);

const allCamps = [bBramble, bKrugs, bRaptors, bWolves, bSentinal, bGromp, rSentinal, rGromp, rWolves, 
                rRaptors, rBramble, rKrugs, tScuttle, bScuttle, mid, top, bot, bBase, rBase];

const allPaths = [
    new Path('BSBJtBSTJ', [bBramble, bKrugs, bRaptors, bWolves, bSentinal, bGromp]),
    new Path('BSTJtBSBJ', [bSentinal, bGromp, bWolves, bRaptors, bBramble, bKrugs]),
    new Path('BSBJtRSBJ', [bBramble, bKrugs, bRaptors, rSentinal, rGromp, rWolves]),
    new Path('BSTJtRSTJ', [bSentinal, bGromp, bWolves, rRaptors, rBramble, rKrugs]),
    new Path('RSBJtRSTJ', [rSentinal, rGromp, rWolves, rRaptors, rBramble, rKrugs]),
    new Path('RSTJtRSBJ', [rBramble, rKrugs, rRaptors, rWolves, rSentinal, rGromp]),
    new Path('RSTJtBSTJ', [rBramble, rKrugs, rRaptors, bSentinal, bGromp, bWolves]),
    new Path('RSBJtBSBJ', [rSentinal, rGromp, rWolves, bRaptors, bBramble, bKrugs]),
]

//takes in the x y coordinates of a champion and returns the closest jungle camp that they are near
const closestCamp = (x, y) => {
    let closestCamp = null;
    let closestCordinates = [Infinity, Infinity];
    for(const camp of allCamps) {
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
    for(const path of allPaths) {
        if(jungles.join('t') === path.name) return path.camps
    }

    return null;
}

const noInvade = () => {
    return true;
}


let possibleCamps = path([11810, 7452], [2500, 12500]);
let currentXP = 160;
const generatePath = () => {
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

    return junglePath

    //find the direction
    //look at where they are the next minute;
    //if jg cs % 4 !== 0 find out the current camp and remove it
    //else add up camps

}

// console.log(direction([3159, 8157], [7000, 4682]))
// console.log(path([3159, 8157], [7000, 4682]))
// console.log(closestCamp(3159, 8157))
// console.log(closestCamp(7000, 4682))

console.log(generatePath())
console.log(possibleCamps)

