let completedPath = [];
let availiblePath = [{name: 'red', val: 1}, {name: 'krugs', val: 8 }, {name: 'raptors', val: 6}, {name: 'eblue', val: 1}, {name: 'egromp', val: 1}, {name: 'ewolves', val: 3}]
let availiblePath2 = [{name: 'eblue', val: 1}, {name: 'egromp', val: 1}, {name: 'ewolves', val: 3}, {name: 'raptors', val: 6}, {name: 'red', val: 1}, {name: 'krugs', val: 8 }]
let currentNum = 2;


function possiblePath(currentPath, returnPath, value, runningVal) {
    let path = [...currentPath]
    for(let i = 0; i < path.length; i++) {
        let oldPath = [...returnPath]
        let currentCamp = path.shift();
        let num = currentCamp.val;
        if(num + runningVal > value) continue;
        returnPath.push(currentCamp);
        if(runningVal + num === value) {
            return returnPath;
        }   
        returnPath = possiblePath(path, returnPath, value, runningVal + num)
        if(returnPath.length > 0) {
            return returnPath
        } else {
            returnPath = oldPath
        }
    }

    return []
}

console.log(possiblePath(availiblePath, [], 14, 0))