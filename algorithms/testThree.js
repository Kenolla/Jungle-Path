let completedPath = [];
let availiblePath = [{name: 'red', val: 1}, {name: 'krugs', val: 8 }, {name: 'raptors', val: 6}, {name: 'eblue', val: 1}, {name: 'egromp', val: 1}, {name: 'ewolves', val: 3}]
let currentNum = 2;
// let takenCamp = availiblePath.shift();
// completedPath.push(takenCamp);

function possiblePath(path, currentCamp, pathLeft, searchVal, runningVal) {
    if(currentCamp.val + runningVal > searchVal) return path
    let newPath = path;
    let newRunningVal = runningVal;
    newPath.push(currentCamp);
    newRunningVal += currentCamp.val;
    if(newRunningVal == searchVal) return newPath;
    for(let i = 0; i < pathLeft.length; i++) {
        newPath = possiblePath(newPath, pathLeft.shift(), pathLeft, searchVal, newRunningVal);
    }
   
    return newPath;
}

console.log(possiblePath(completedPath, availiblePath.shift(), availiblePath, 7, 0));

