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

export function generateCamps(side) {
    const bRed = 'BSBJ';
    const bBlue = 'BSTJ';
    const rRed = 'RSTJ';
    const rBlue = 'RSBJ';

    const bBramble = new Camp('Bramble', 7500, 3200, 175, bRed);
    const bKrugs = new Camp('Krugs', 8200, 2700, 201, bRed);
    const bRaptors = new Camp('Raptors', 7000, 4800, 150, bRed);
    const bWolves = new Camp('Wolves', 3200, 6700, 160, bBlue);
    const bSentinal = new Camp('Sentinal', 3200, 8150, 175, bBlue);
    const bGromp = new Camp('Gromp', 2400, 8350, 200, bBlue);

    const rSentinal = new Camp('Sentinal', 11400, 6900, 175, rBlue);
    const rGromp = new Camp('Gromp', 12300, 6700, 200, rBlue);
    const rWolves = new Camp('Wolves', 11300, 8300, 160 ,rBlue);
    const rRaptors = new Camp('Raptors', 8000, 10200, 150, rRed);
    const rBramble = new Camp('Bramble', 7500, 11800, 175, rRed);
    const rKrugs = new Camp('Krugs', 6800, 12300, 201, rRed);

    const tScuttle = new Camp('Scuttle', 5000, 9500, 'tRriver');
    const bScuttle = new Camp('Scuttle', 10000, 55000, 'bRiver');

    const mid = new Camp('Mid Lane', 7500, 7500, 0, `${side}TJ`);
    const top = new Camp('Top Lane', 2500, 12500, 0, `${side}TJ`);
    const bot = new Camp('Bot Lane', 12700, 2500, 0, `${side}BJ`);
    const bBase = new Camp('Blue Base', 550, 550, 0, null);
    const rBase = new Camp('Red Base', 1450, 1450, 0, null);

    return {
        allCamps : [bBramble, bKrugs, bRaptors, bWolves, bSentinal, bGromp, rSentinal, rGromp, rWolves, 
                        rRaptors, rBramble, rKrugs, tScuttle, bScuttle, mid, top, bot, bBase, rBase],

        allPaths : [
            new Path('BSBJtBSTJ', [bBramble, bKrugs, bRaptors, bWolves, bSentinal, bGromp]),
            new Path('BSTJtBSBJ', [bSentinal, bGromp, bWolves, bRaptors, bBramble, bKrugs]),
            new Path('BSBJtRSBJ', [bBramble, bKrugs, bRaptors, rSentinal, rGromp, rWolves]),
            new Path('BSTJtRSTJ', [bSentinal, bGromp, bWolves, rRaptors, rBramble, rKrugs]),
            new Path('RSBJtRSTJ', [rSentinal, rGromp, rWolves, rRaptors, rBramble, rKrugs]),
            new Path('RSTJtRSBJ', [rBramble, rKrugs, rRaptors, rWolves, rSentinal, rGromp]),
            new Path('RSTJtBSTJ', [rBramble, rKrugs, rRaptors, bSentinal, bGromp, bWolves]),
            new Path('RSBJtBSBJ', [rSentinal, rGromp, rWolves, bRaptors, bBramble, bKrugs]),
        ]
    }
}