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

    return {
        bRed : 'BSBJ',
        bBlue : 'BSTJ',
        rRed : 'RSTJ',
        rBlue : 'RSBJ',

        bBramble : new Camp('Bramble', 7500, 3200, 175, bRed),
        bKrugs : new Camp('Krugs', 8200, 2700, 201, bRed),
        bRaptors : new Camp('Raptors', 7000, 4800, 150, bRed),
        bWolves : new Camp('Wolves', 3200, 6700, 160, bBlue),
        bSentinal : new Camp('Sentinal', 3200, 8150, 175, bBlue),
        bGromp : new Camp('Gromp', 2400, 8350, 200, bBlue),

        rSentinal : new Camp('Sentinal', 11400, 6900, 175, rBlue),
        rGromp : new Camp('Gromp', 12300, 6700, 200, rBlue),
        rWolves : new Camp('Wolves', 11300, 8300, 160 ,rBlue),
        rRaptors : new Camp('Raptors', 8000, 10200, 150, rRed),
        rBramble : new Camp('Bramble', 7500, 11800, 175, rRed),
        rKrugs : new Camp('Krugs', 6800, 12300, 201, rRed),

        tScuttle : new Camp('Scuttle', 5000, 9500, 'tRriver'),
        bScuttle : new Camp('Scuttle', 10000, 55000, 'bRiver'),

        mid : new Camp('Mid Lane', 7500, 7500, 0, `${side}TJ`),
        top : new Camp('Top Lane', 2500, 12500, 0, `${side}TJ`),
        bot : new Camp('Bot Lane', 12700, 2500, 0, `${side}BJ`),
        bBase : new Camp('Blue Base', 550, 550, 0, null),
        rBase : new Camp('Red Base', 1450, 1450, 0, null),

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