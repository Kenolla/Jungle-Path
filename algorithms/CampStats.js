class Camp {
    constructor(name, x, y, jg) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.jg = jg;
    }
}

let bRed = 'BSRJ';
let bBlue = 'BSBJ';
let rRed = 'RSRJ';
let rBlue = 'RSBJ';

let bBramble = new Camp('Bramble', 7500, 3200, bRed);
let bKrugs = new Camp('Krugs', 8200, 2700, bRed);
let bRaptors = new Camp('Raptors', 7000, 4800, bRed);
let bWolves = new Camp('Wolves', 3200, 6700, bBlue);
let bSentinal = new Camp('Sentinal', 3200, 8150, bBlue);
let bGromp = new Camp('Gromp', 2400, 8350, bBlue);

let rSentinal = new Camp('Sentinal', 11400, 6900, rBlue);
let rGromp = new Camp('Gromp', 12300, 6700, rBlue);
let rWolves = new Camp('Wolves', 11300, 8300, rBlue);
let rRaptors = new Camp('Raptors', 8000, 10200, rRed);
let rBramble = new Camp('Bramble', 7500, 11800, rRed);
let rKrugs = new Camp('Krugs', 6800, 12300, rRed);

let tScuttle = new Camp('Scuttle', 5000, 9500, 'tRriver');
let bScuttle = new Camp('Scuttle', 10000, 55000, 'bRiver');

let allCamps = [bBramble, bKrugs, bRaptors, bWolves, bSentinal, bGromp, rSentinal, rGromp, rWolves, rRaptors, rBramble, rKrugs, tScuttle, bScuttle];

//takes in the x y coordinates of a champion and returns the closest jungle camp that they are near
let closestCamp = (x, y) => {
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

//takes in two arrays of an [x, y] position coordinate, and returns the direction of the jungler 
let direction = (firstP, secondP) => {
    return [closestCamp(firstP[0], firstP[1]).jg, closestCamp(secondP[0], secondP[1]).jg]
}

console.log(direction([3159, 8157], [7000, 4682]))
console.log(closestCamp(3159, 8157))
console.log(closestCamp(7000, 4682))