 class TimeLine {
    constructor(frames) {
        this.frames = frames
    }

    getCharFrames(id) {
        let charFrames = []
        for(const frame of this.frames) {
            charFrames.push(frame.participantFrames[id.toString()])
        }

        return charFrames
    }

    getCharPositions(id) {
        let charPositions = []
        let frames = this.getCharFrames(id);
        for(const frame of frames) {
            charPositions.push(frame.position)
        }

        return charPositions
    }

    getCharStat(id, stat, minute) {
        let frames = this.getCharFrames(id);
        let frame = frames[minute]
        return frame[stat]
    }

    getEventFrames(minute) {
        let frame = this.frames[minute]
        return frame.events
    }
 }
 
 const frames = [
    {
        "events": [
            {
                "realTimestamp": 1680726933953,
                "timestamp": 0,
                "type": "PAUSE_END"
            }
        ],
        "participantFrames": {
            "1": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 38,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 650,
                    "healthMax": 650,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 345,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 0,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 1,
                "position": {
                    "x": 554,
                    "y": 581
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "2": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 38,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 655,
                    "healthMax": 655,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 340,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 410,
                    "powerMax": 410,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 2,
                "position": {
                    "x": 593,
                    "y": 464
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "3": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 18,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 550,
                    "healthMax": 550,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 470,
                    "powerMax": 470,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 3,
                "position": {
                    "x": 557,
                    "y": 345
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "4": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 27,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 580,
                    "healthMax": 580,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 315,
                    "powerMax": 315,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 4,
                "position": {
                    "x": 458,
                    "y": 271
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "5": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 42,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 640,
                    "healthMax": 640,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 325,
                    "powerMax": 325,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 5,
                "position": {
                    "x": 335,
                    "y": 269
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "6": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 37,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 645,
                    "healthMax": 645,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 100,
                    "powerMax": 100,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 6,
                "position": {
                    "x": 14500,
                    "y": 14511
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "7": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 34,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 630,
                    "healthMax": 630,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 345,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 10000,
                    "powerMax": 10000,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 7,
                "position": {
                    "x": 14539,
                    "y": 14394
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "8": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 21,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 590,
                    "healthMax": 590,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 418,
                    "powerMax": 418,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 8,
                "position": {
                    "x": 14503,
                    "y": 14275
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "9": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 26,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 580,
                    "healthMax": 580,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 348,
                    "powerMax": 348,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 9,
                "position": {
                    "x": 14404,
                    "y": 14201
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "10": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 28,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 25,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 600,
                    "healthMax": 600,
                    "healthRegen": 0,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 274,
                    "powerMax": 274,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 500,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 10,
                "position": {
                    "x": 14281,
                    "y": 14199
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            }
        },
        "timestamp": 0
    },
    {
        "events": [
            {
                "itemId": 1036,
                "participantId": 9,
                "timestamp": 3166,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 9,
                "timestamp": 3166,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 9,
                "timestamp": 3166,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 9,
                "timestamp": 3166,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 1055,
                "participantId": 1,
                "timestamp": 3331,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 1,
                "timestamp": 3331,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 3340,
                "participantId": 9,
                "timestamp": 3630,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 3858,
                "participantId": 5,
                "timestamp": 4986,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 5,
                "timestamp": 4986,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 5,
                "timestamp": 4986,
                "type": "ITEM_PURCHASED"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 1,
                "skillSlot": 1,
                "timestamp": 5085,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 3340,
                "participantId": 5,
                "timestamp": 5582,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 3858,
                "participantId": 10,
                "timestamp": 9154,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 10,
                "timestamp": 9154,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 10,
                "timestamp": 9154,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 1056,
                "participantId": 6,
                "timestamp": 9881,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 1102,
                "participantId": 7,
                "timestamp": 10079,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 6,
                "timestamp": 10277,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 6,
                "timestamp": 10475,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 3340,
                "participantId": 6,
                "timestamp": 10839,
                "type": "ITEM_PURCHASED"
            },
            {
                "afterId": 0,
                "beforeId": 1102,
                "goldGain": 450,
                "participantId": 7,
                "timestamp": 11103,
                "type": "ITEM_UNDO"
            },
            {
                "itemId": 1103,
                "participantId": 7,
                "timestamp": 11797,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 1056,
                "participantId": 3,
                "timestamp": 12194,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 3,
                "timestamp": 12194,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 3,
                "timestamp": 12194,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 7,
                "timestamp": 12625,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 3340,
                "participantId": 3,
                "timestamp": 12658,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 1056,
                "participantId": 8,
                "timestamp": 12757,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 8,
                "timestamp": 13221,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 8,
                "timestamp": 13386,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 3340,
                "participantId": 8,
                "timestamp": 13618,
                "type": "ITEM_PURCHASED"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 9,
                "skillSlot": 1,
                "timestamp": 15537,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 7,
                "skillSlot": 1,
                "timestamp": 17356,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 1101,
                "participantId": 2,
                "timestamp": 27848,
                "type": "ITEM_PURCHASED"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 10,
                "skillSlot": 1,
                "timestamp": 28080,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 3364,
                "participantId": 2,
                "timestamp": 29373,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 2,
                "timestamp": 29672,
                "type": "ITEM_PURCHASED"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 8,
                "skillSlot": 3,
                "timestamp": 30102,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 1036,
                "participantId": 4,
                "timestamp": 32948,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 4,
                "timestamp": 32948,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 4,
                "timestamp": 32948,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 4,
                "timestamp": 32948,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 3340,
                "participantId": 4,
                "timestamp": 34073,
                "type": "ITEM_PURCHASED"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 6,
                "skillSlot": 1,
                "timestamp": 35762,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 2,
                "skillSlot": 1,
                "timestamp": 36691,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 4,
                "skillSlot": 1,
                "timestamp": 39700,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 3,
                "skillSlot": 1,
                "timestamp": 51086,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 2003,
                "participantId": 3,
                "timestamp": 58859,
                "type": "ITEM_DESTROYED"
            },
            {
                "assistingParticipantIds": [
                    7,
                    8,
                    10
                ],
                "bounty": 400,
                "killStreakLength": 0,
                "killerId": 9,
                "position": {
                    "x": 6172,
                    "y": 5927
                },
                "shutdownBounty": 0,
                "timestamp": 59123,
                "type": "CHAMPION_KILL",
                "victimDamageDealt": [
                    {
                        "basic": false,
                        "magicDamage": 96,
                        "name": "Taliyah",
                        "participantId": 10,
                        "physicalDamage": 0,
                        "spellName": "taliyahq",
                        "spellSlot": 0,
                        "trueDamage": 6,
                        "type": "OTHER"
                    }
                ],
                "victimDamageReceived": [
                    {
                        "basic": false,
                        "magicDamage": 87,
                        "name": "Thresh",
                        "participantId": 10,
                        "physicalDamage": 0,
                        "spellName": "threshq",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "Thresh",
                        "participantId": 10,
                        "physicalDamage": 47,
                        "spellName": "threshqleap",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "Thresh",
                        "participantId": 10,
                        "physicalDamage": 47,
                        "spellName": "threshbasicattack1m",
                        "spellSlot": 49,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 68,
                        "name": "Ahri",
                        "participantId": 8,
                        "physicalDamage": 0,
                        "spellName": "ahrie",
                        "spellSlot": 2,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 26,
                        "name": "Ahri",
                        "participantId": 8,
                        "physicalDamage": 0,
                        "spellName": "",
                        "spellSlot": -1,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "Ahri",
                        "participantId": 8,
                        "physicalDamage": 89,
                        "spellName": "ahribasicattack",
                        "spellSlot": 64,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Aphelios",
                        "participantId": 9,
                        "physicalDamage": 130,
                        "spellName": "apheliosw",
                        "spellSlot": 1,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Viego",
                        "participantId": 7,
                        "physicalDamage": 49,
                        "spellName": "viegoq",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Viego",
                        "participantId": 7,
                        "physicalDamage": 17,
                        "spellName": "",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Viego",
                        "participantId": 7,
                        "physicalDamage": 12,
                        "spellName": "",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "Viego",
                        "participantId": 7,
                        "physicalDamage": 54,
                        "spellName": "",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    }
                ],
                "victimId": 3
            },
            {
                "killType": "KILL_FIRST_BLOOD",
                "killerId": 9,
                "position": {
                    "x": 5989,
                    "y": 5104
                },
                "timestamp": 59123,
                "type": "CHAMPION_SPECIAL_KILL"
            }
        ],
        "participantFrames": {
            "1": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 38,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 88,
                    "attackSpeed": 103,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 14,
                    "cooldownReduction": 0,
                    "health": 486,
                    "healthMax": 730,
                    "healthRegen": 6,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 40,
                    "movementSpeed": 345,
                    "omnivamp": 2,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 0,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 0,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 166,
                    "physicalDamageDone": 228,
                    "physicalDamageDoneToChampions": 228,
                    "physicalDamageTaken": 102,
                    "totalDamageDone": 228,
                    "totalDamageDoneToChampions": 228,
                    "totalDamageTaken": 268,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 1,
                "position": {
                    "x": 1125,
                    "y": 10816
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "2": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 44,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 78,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 655,
                    "healthMax": 655,
                    "healthRegen": 16,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 340,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 410,
                    "powerMax": 410,
                    "powerRegen": 23,
                    "spellVamp": 0
                },
                "currentGold": 0,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 2,
                "position": {
                    "x": 5805,
                    "y": 3492
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "3": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 18,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 58,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 0,
                    "healthMax": 620,
                    "healthRegen": 13,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 38,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 438,
                    "powerMax": 495,
                    "powerRegen": 16,
                    "spellVamp": 0
                },
                "currentGold": 9,
                "damageStats": {
                    "magicDamageDone": 96,
                    "magicDamageDoneToChampions": 96,
                    "magicDamageTaken": 181,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 450,
                    "totalDamageDone": 102,
                    "totalDamageDoneToChampions": 102,
                    "totalDamageTaken": 632,
                    "trueDamageDone": 6,
                    "trueDamageDoneToChampions": 6,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 3,
                "position": {
                    "x": 6172,
                    "y": 5927
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 509,
                "xp": 0
            },
            "4": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 33,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 77,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 580,
                    "healthMax": 580,
                    "healthRegen": 7,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 315,
                    "powerMax": 315,
                    "powerRegen": 14,
                    "spellVamp": 0
                },
                "currentGold": 0,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 4,
                "position": {
                    "x": 7906,
                    "y": 783
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "5": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 14,
                    "armor": 48,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 56,
                    "attackSpeed": 113,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 670,
                    "healthMax": 670,
                    "healthRegen": 19,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 325,
                    "powerMax": 325,
                    "powerRegen": 16,
                    "spellVamp": 0
                },
                "currentGold": 0,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 0,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 0,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 5,
                "position": {
                    "x": 10356,
                    "y": 3036
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "6": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 44,
                    "armor": 43,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 61,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 5,
                    "cooldownReduction": 0,
                    "health": 506,
                    "healthMax": 715,
                    "healthRegen": 21,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 100,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 0,
                "damageStats": {
                    "magicDamageDone": 166,
                    "magicDamageDoneToChampions": 166,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 102,
                    "physicalDamageDoneToChampions": 102,
                    "physicalDamageTaken": 228,
                    "totalDamageDone": 268,
                    "totalDamageDoneToChampions": 268,
                    "totalDamageTaken": 228,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 6,
                "position": {
                    "x": 1215,
                    "y": 12170
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 500,
                "xp": 0
            },
            "7": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 40,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 69,
                    "attackSpeed": 114,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 630,
                    "healthMax": 630,
                    "healthRegen": 14,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 345,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 10000,
                    "powerMax": 10000,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 33,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 134,
                    "physicalDamageDoneToChampions": 134,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 134,
                    "totalDamageDoneToChampions": 134,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 7,
                "position": {
                    "x": 6470,
                    "y": 4858
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 533,
                "xp": 6
            },
            "8": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 26,
                    "armor": 21,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 53,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 660,
                    "healthMax": 660,
                    "healthRegen": 5,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 38,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 371,
                    "powerMax": 443,
                    "powerRegen": 16,
                    "spellVamp": 0
                },
                "currentGold": 33,
                "damageStats": {
                    "magicDamageDone": 94,
                    "magicDamageDoneToChampions": 94,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 89,
                    "physicalDamageDoneToChampions": 89,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 184,
                    "totalDamageDoneToChampions": 184,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 8,
                "position": {
                    "x": 5889,
                    "y": 5361
                },
                "timeEnemySpentControlled": 2778,
                "totalGold": 533,
                "xp": 6
            },
            "9": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 32,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 77,
                    "attackSpeed": 118,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 580,
                    "healthMax": 580,
                    "healthRegen": 6,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 348,
                    "powerMax": 348,
                    "powerRegen": 13,
                    "spellVamp": 0
                },
                "currentGold": 400,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 130,
                    "physicalDamageDoneToChampions": 130,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 130,
                    "totalDamageDoneToChampions": 130,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 9,
                "position": {
                    "x": 5970,
                    "y": 5203
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 900,
                "xp": 6
            },
            "10": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 23,
                    "armor": 34,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 56,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 8,
                    "cooldownReduction": 0,
                    "health": 545,
                    "healthMax": 630,
                    "healthRegen": 21,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 212,
                    "powerMax": 274,
                    "powerRegen": 12,
                    "spellVamp": 0
                },
                "currentGold": 33,
                "damageStats": {
                    "magicDamageDone": 87,
                    "magicDamageDoneToChampions": 87,
                    "magicDamageTaken": 96,
                    "physicalDamageDone": 94,
                    "physicalDamageDoneToChampions": 94,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 182,
                    "totalDamageDoneToChampions": 182,
                    "totalDamageTaken": 102,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 6
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 10,
                "position": {
                    "x": 6086,
                    "y": 5173
                },
                "timeEnemySpentControlled": 5392,
                "totalGold": 533,
                "xp": 6
            }
        },
        "timestamp": 60018
    },
    {
        "events": [
            {
                "itemId": 1036,
                "participantId": 9,
                "timestamp": 71236,
                "type": "ITEM_PURCHASED"
            },
            {
                "level": 2,
                "participantId": 2,
                "timestamp": 106449,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 2,
                "skillSlot": 3,
                "timestamp": 107275,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 2,
                "participantId": 7,
                "timestamp": 108300,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 7,
                "skillSlot": 2,
                "timestamp": 109918,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 5,
                "skillSlot": 1,
                "timestamp": 111575,
                "type": "SKILL_LEVEL_UP"
            }
        ],
        "participantFrames": {
            "1": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 38,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 81,
                    "attackSpeed": 103,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 5,
                    "cooldownReduction": 0,
                    "health": 717,
                    "healthMax": 730,
                    "healthRegen": 6,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 40,
                    "movementSpeed": 345,
                    "omnivamp": 2,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 0,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 84,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 166,
                    "physicalDamageDone": 774,
                    "physicalDamageDoneToChampions": 292,
                    "physicalDamageTaken": 120,
                    "totalDamageDone": 774,
                    "totalDamageDoneToChampions": 292,
                    "totalDamageTaken": 286,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 3,
                "participantId": 1,
                "position": {
                    "x": 2289,
                    "y": 12405
                },
                "timeEnemySpentControlled": 564,
                "totalGold": 584,
                "xp": 185
            },
            "2": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 47,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 81,
                    "attackSpeed": 101,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 409,
                    "healthMax": 733,
                    "healthRegen": 24,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 33,
                    "movementSpeed": 340,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 310,
                    "powerMax": 446,
                    "powerRegen": 60,
                    "spellVamp": 0
                },
                "currentGold": 121,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 3098,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 833,
                    "totalDamageDone": 3796,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 833,
                    "trueDamageDone": 697,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 4,
                "level": 2,
                "minionsKilled": 0,
                "participantId": 2,
                "position": {
                    "x": 7894,
                    "y": 2303
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 621,
                "xp": 335
            },
            "3": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 18,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 58,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 588,
                    "healthMax": 620,
                    "healthRegen": 13,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 38,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 427,
                    "powerMax": 520,
                    "powerRegen": 16,
                    "spellVamp": 0
                },
                "currentGold": 139,
                "damageStats": {
                    "magicDamageDone": 421,
                    "magicDamageDoneToChampions": 170,
                    "magicDamageTaken": 181,
                    "physicalDamageDone": 614,
                    "physicalDamageDoneToChampions": 47,
                    "physicalDamageTaken": 490,
                    "totalDamageDone": 1049,
                    "totalDamageDoneToChampions": 231,
                    "totalDamageTaken": 672,
                    "trueDamageDone": 13,
                    "trueDamageDoneToChampions": 13,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 6,
                "participantId": 3,
                "position": {
                    "x": 7547,
                    "y": 7152
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 639,
                "xp": 276
            },
            "4": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 33,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 77,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 580,
                    "healthMax": 580,
                    "healthRegen": 7,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 264,
                    "powerMax": 315,
                    "powerRegen": 26,
                    "spellVamp": 0
                },
                "currentGold": 98,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 1113,
                    "physicalDamageDoneToChampions": 115,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 1113,
                    "totalDamageDoneToChampions": 115,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 4,
                "participantId": 4,
                "position": {
                    "x": 12176,
                    "y": 2068
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 598,
                "xp": 131
            },
            "5": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 14,
                    "armor": 48,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 56,
                    "attackSpeed": 113,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 650,
                    "healthMax": 670,
                    "healthRegen": 19,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 281,
                    "powerMax": 325,
                    "powerRegen": 16,
                    "spellVamp": 0
                },
                "currentGold": 37,
                "damageStats": {
                    "magicDamageDone": 46,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 289,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 67,
                    "totalDamageDone": 502,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 67,
                    "trueDamageDone": 167,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 1,
                "participantId": 5,
                "position": {
                    "x": 12807,
                    "y": 2009
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 537,
                "xp": 131
            },
            "6": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 43,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 61,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 5,
                    "cooldownReduction": 0,
                    "health": 542,
                    "healthMax": 715,
                    "healthRegen": 19,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 32,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 100,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 63,
                "damageStats": {
                    "magicDamageDone": 307,
                    "magicDamageDoneToChampions": 166,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 168,
                    "physicalDamageDoneToChampions": 102,
                    "physicalDamageTaken": 292,
                    "totalDamageDone": 476,
                    "totalDamageDoneToChampions": 268,
                    "totalDamageTaken": 292,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 2,
                "participantId": 6,
                "position": {
                    "x": 2592,
                    "y": 13055
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 563,
                "xp": 185
            },
            "7": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 43,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 64,
                    "attackSpeed": 116,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 412,
                    "healthMax": 708,
                    "healthRegen": 22,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 33,
                    "movementSpeed": 345,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 10000,
                    "powerMax": 10000,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 164,
                "damageStats": {
                    "magicDamageDone": 80,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 2494,
                    "physicalDamageDoneToChampions": 134,
                    "physicalDamageTaken": 732,
                    "totalDamageDone": 3759,
                    "totalDamageDoneToChampions": 134,
                    "totalDamageTaken": 732,
                    "trueDamageDone": 1185,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 4,
                "level": 2,
                "minionsKilled": 0,
                "participantId": 7,
                "position": {
                    "x": 6834,
                    "y": 12662
                },
                "timeEnemySpentControlled": 1259,
                "totalGold": 664,
                "xp": 331
            },
            "8": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 26,
                    "armor": 21,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 53,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 549,
                    "healthMax": 660,
                    "healthRegen": 5,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 38,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 443,
                    "powerMax": 443,
                    "powerRegen": 16,
                    "spellVamp": 0
                },
                "currentGold": 127,
                "damageStats": {
                    "magicDamageDone": 94,
                    "magicDamageDoneToChampions": 94,
                    "magicDamageTaken": 74,
                    "physicalDamageDone": 611,
                    "physicalDamageDoneToChampions": 89,
                    "physicalDamageTaken": 47,
                    "totalDamageDone": 706,
                    "totalDamageDoneToChampions": 184,
                    "totalDamageTaken": 128,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 6
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 4,
                "participantId": 8,
                "position": {
                    "x": 7584,
                    "y": 8021
                },
                "timeEnemySpentControlled": 2778,
                "totalGold": 627,
                "xp": 222
            },
            "9": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 32,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 87,
                    "attackSpeed": 114,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 580,
                    "healthMax": 580,
                    "healthRegen": 6,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 348,
                    "powerMax": 348,
                    "powerRegen": 13,
                    "spellVamp": 0
                },
                "currentGold": 113,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 392,
                    "physicalDamageDoneToChampions": 130,
                    "physicalDamageTaken": 0,
                    "totalDamageDone": 392,
                    "totalDamageDoneToChampions": 130,
                    "totalDamageTaken": 0,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 2,
                "participantId": 9,
                "position": {
                    "x": 12960,
                    "y": 2821
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 963,
                "xp": 120
            },
            "10": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 35,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 56,
                    "attackSpeed": 100,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 10,
                    "cooldownReduction": 0,
                    "health": 518,
                    "healthMax": 630,
                    "healthRegen": 21,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 274,
                    "powerMax": 274,
                    "powerRegen": 12,
                    "spellVamp": 0
                },
                "currentGold": 56,
                "damageStats": {
                    "magicDamageDone": 87,
                    "magicDamageDoneToChampions": 87,
                    "magicDamageTaken": 96,
                    "physicalDamageDone": 150,
                    "physicalDamageDoneToChampions": 94,
                    "physicalDamageTaken": 115,
                    "totalDamageDone": 238,
                    "totalDamageDoneToChampions": 182,
                    "totalDamageTaken": 218,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 6
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 1,
                "minionsKilled": 0,
                "participantId": 10,
                "position": {
                    "x": 12767,
                    "y": 3089
                },
                "timeEnemySpentControlled": 5392,
                "totalGold": 556,
                "xp": 120
            }
        },
        "timestamp": 120048
    },
    {
        "events": [
            {
                "itemId": 2003,
                "participantId": 3,
                "timestamp": 126433,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 2010,
                "participantId": 3,
                "timestamp": 126897,
                "type": "ITEM_DESTROYED"
            },
            {
                "level": 2,
                "participantId": 8,
                "timestamp": 130704,
                "type": "LEVEL_UP"
            },
            {
                "level": 2,
                "participantId": 3,
                "timestamp": 131299,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 8,
                "skillSlot": 1,
                "timestamp": 131564,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 3,
                "skillSlot": 3,
                "timestamp": 131997,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 2003,
                "participantId": 10,
                "timestamp": 133390,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 2003,
                "participantId": 8,
                "timestamp": 134481,
                "type": "ITEM_DESTROYED"
            },
            {
                "level": 2,
                "participantId": 1,
                "timestamp": 136498,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 1,
                "skillSlot": 3,
                "timestamp": 136829,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 2,
                "participantId": 4,
                "timestamp": 137327,
                "type": "LEVEL_UP"
            },
            {
                "level": 2,
                "participantId": 5,
                "timestamp": 137327,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 5,
                "skillSlot": 2,
                "timestamp": 138649,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 4,
                "skillSlot": 3,
                "timestamp": 139939,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 3,
                "participantId": 2,
                "timestamp": 142288,
                "type": "LEVEL_UP"
            },
            {
                "creatorId": 3,
                "timestamp": 142554,
                "type": "WARD_PLACED",
                "wardType": "YELLOW_TRINKET"
            },
            {
                "level": 2,
                "participantId": 6,
                "timestamp": 144209,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 2,
                "skillSlot": 2,
                "timestamp": 144342,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 6,
                "skillSlot": 3,
                "timestamp": 146724,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 3,
                "participantId": 7,
                "timestamp": 149205,
                "type": "LEVEL_UP"
            },
            {
                "level": 2,
                "participantId": 10,
                "timestamp": 152378,
                "type": "LEVEL_UP"
            },
            {
                "level": 2,
                "participantId": 9,
                "timestamp": 152378,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 10,
                "skillSlot": 3,
                "timestamp": 152776,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 9,
                "skillSlot": 1,
                "timestamp": 154132,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 7,
                "skillSlot": 3,
                "timestamp": 155685,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 3,
                "participantId": 3,
                "timestamp": 156811,
                "type": "LEVEL_UP"
            },
            {
                "itemId": 2003,
                "participantId": 5,
                "timestamp": 157604,
                "type": "ITEM_DESTROYED"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 3,
                "skillSlot": 2,
                "timestamp": 158132,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 3,
                "participantId": 8,
                "timestamp": 160977,
                "type": "LEVEL_UP"
            },
            {
                "creatorId": 7,
                "timestamp": 161242,
                "type": "WARD_PLACED",
                "wardType": "YELLOW_TRINKET"
            },
            {
                "itemId": 2003,
                "participantId": 4,
                "timestamp": 161474,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 2003,
                "participantId": 5,
                "timestamp": 161936,
                "type": "ITEM_DESTROYED"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 8,
                "skillSlot": 2,
                "timestamp": 162002,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 2003,
                "participantId": 9,
                "timestamp": 162798,
                "type": "ITEM_DESTROYED"
            },
            {
                "level": 3,
                "participantId": 1,
                "timestamp": 168390,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 1,
                "skillSlot": 2,
                "timestamp": 169281,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 2010,
                "participantId": 10,
                "timestamp": 171233,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 2003,
                "participantId": 8,
                "timestamp": 177454,
                "type": "ITEM_DESTROYED"
            }
        ],
        "participantFrames": {
            "1": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 44,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 86,
                    "attackSpeed": 106,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 5,
                    "cooldownReduction": 0,
                    "health": 872,
                    "healthMax": 898,
                    "healthRegen": 8,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 43,
                    "movementSpeed": 345,
                    "omnivamp": 2,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 0,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 402,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 166,
                    "physicalDamageDone": 2455,
                    "physicalDamageDoneToChampions": 507,
                    "physicalDamageTaken": 183,
                    "totalDamageDone": 2455,
                    "totalDamageDoneToChampions": 507,
                    "totalDamageTaken": 349,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 3,
                "minionsKilled": 14,
                "participantId": 1,
                "position": {
                    "x": 2661,
                    "y": 12578
                },
                "timeEnemySpentControlled": 1723,
                "totalGold": 902,
                "xp": 768
            },
            "2": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 50,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 83,
                    "attackSpeed": 103,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 530,
                    "healthMax": 815,
                    "healthRegen": 26,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 35,
                    "movementSpeed": 340,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 228,
                    "powerMax": 483,
                    "powerRegen": 91,
                    "spellVamp": 0
                },
                "currentGold": 522,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 10531,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 1803,
                    "totalDamageDone": 13914,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 1803,
                    "trueDamageDone": 3383,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 16,
                "level": 3,
                "minionsKilled": 0,
                "participantId": 2,
                "position": {
                    "x": 3116,
                    "y": 8124
                },
                "timeEnemySpentControlled": 41087,
                "totalGold": 1022,
                "xp": 836
            },
            "3": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 24,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 62,
                    "attackSpeed": 112,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 639,
                    "healthMax": 773,
                    "healthRegen": 14,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 39,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 189,
                    "powerMax": 679,
                    "powerRegen": 18,
                    "spellVamp": 0
                },
                "currentGold": 427,
                "damageStats": {
                    "magicDamageDone": 2717,
                    "magicDamageDoneToChampions": 552,
                    "magicDamageTaken": 314,
                    "physicalDamageDone": 1450,
                    "physicalDamageDoneToChampions": 95,
                    "physicalDamageTaken": 677,
                    "totalDamageDone": 4184,
                    "totalDamageDoneToChampions": 664,
                    "totalDamageTaken": 992,
                    "trueDamageDone": 16,
                    "trueDamageDoneToChampions": 16,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 3,
                "minionsKilled": 13,
                "participantId": 3,
                "position": {
                    "x": 7413,
                    "y": 6819
                },
                "timeEnemySpentControlled": 39229,
                "totalGold": 927,
                "xp": 924
            },
            "4": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 36,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 78,
                    "attackSpeed": 112,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 281,
                    "healthMax": 657,
                    "healthRegen": 7,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 292,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 114,
                    "powerMax": 343,
                    "powerRegen": 29,
                    "spellVamp": 0
                },
                "currentGold": 504,
                "damageStats": {
                    "magicDamageDone": 141,
                    "magicDamageDoneToChampions": 61,
                    "magicDamageTaken": 64,
                    "physicalDamageDone": 4569,
                    "physicalDamageDoneToChampions": 882,
                    "physicalDamageTaken": 538,
                    "totalDamageDone": 4710,
                    "totalDamageDoneToChampions": 943,
                    "totalDamageTaken": 618,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 16
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 2,
                "minionsKilled": 18,
                "participantId": 4,
                "position": {
                    "x": 12051,
                    "y": 1802
                },
                "timeEnemySpentControlled": 4137,
                "totalGold": 1004,
                "xp": 545
            },
            "5": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 14,
                    "armor": 51,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 58,
                    "attackSpeed": 114,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 23,
                    "healthMax": 750,
                    "healthRegen": 100,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 33,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 209,
                    "powerMax": 361,
                    "powerRegen": 17,
                    "spellVamp": 0
                },
                "currentGold": 252,
                "damageStats": {
                    "magicDamageDone": 327,
                    "magicDamageDoneToChampions": 232,
                    "magicDamageTaken": 290,
                    "physicalDamageDone": 520,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 777,
                    "totalDamageDone": 1834,
                    "totalDamageDoneToChampions": 250,
                    "totalDamageTaken": 1158,
                    "trueDamageDone": 986,
                    "trueDamageDoneToChampions": 18,
                    "trueDamageTaken": 90
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 2,
                "minionsKilled": 3,
                "participantId": 5,
                "position": {
                    "x": 12882,
                    "y": 2086
                },
                "timeEnemySpentControlled": 6185,
                "totalGold": 752,
                "xp": 545
            },
            "6": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 46,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 63,
                    "attackSpeed": 110,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 5,
                    "cooldownReduction": 0,
                    "health": 528,
                    "healthMax": 789,
                    "healthRegen": 11,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 5,
                    "magicResist": 33,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 100,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 304,
                "damageStats": {
                    "magicDamageDone": 1307,
                    "magicDamageDoneToChampions": 166,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 837,
                    "physicalDamageDoneToChampions": 102,
                    "physicalDamageTaken": 507,
                    "totalDamageDone": 2144,
                    "totalDamageDoneToChampions": 268,
                    "totalDamageTaken": 507,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 2,
                "minionsKilled": 9,
                "participantId": 6,
                "position": {
                    "x": 3344,
                    "y": 13226
                },
                "timeEnemySpentControlled": 497,
                "totalGold": 804,
                "xp": 614
            },
            "7": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 47,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 84,
                    "attackSpeed": 118,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 706,
                    "healthMax": 790,
                    "healthRegen": 16,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 35,
                    "movementSpeed": 345,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 10000,
                    "powerMax": 10000,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 476,
                "damageStats": {
                    "magicDamageDone": 317,
                    "magicDamageDoneToChampions": 61,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 6097,
                    "physicalDamageDoneToChampions": 345,
                    "physicalDamageTaken": 1298,
                    "totalDamageDone": 9267,
                    "totalDamageDoneToChampions": 422,
                    "totalDamageTaken": 1298,
                    "trueDamageDone": 2853,
                    "trueDamageDoneToChampions": 16,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 12,
                "level": 3,
                "minionsKilled": 0,
                "participantId": 7,
                "position": {
                    "x": 12350,
                    "y": 1984
                },
                "timeEnemySpentControlled": 41394,
                "totalGold": 976,
                "xp": 700
            },
            "8": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 26,
                    "armor": 27,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 57,
                    "attackSpeed": 112,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 482,
                    "healthMax": 801,
                    "healthRegen": 86,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 39,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 387,
                    "powerMax": 504,
                    "powerRegen": 18,
                    "spellVamp": 0
                },
                "currentGold": 362,
                "damageStats": {
                    "magicDamageDone": 653,
                    "magicDamageDoneToChampions": 227,
                    "magicDamageTaken": 455,
                    "physicalDamageDone": 1537,
                    "physicalDamageDoneToChampions": 226,
                    "physicalDamageTaken": 114,
                    "totalDamageDone": 2500,
                    "totalDamageDoneToChampions": 453,
                    "totalDamageTaken": 581,
                    "trueDamageDone": 310,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 10
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 3,
                "minionsKilled": 11,
                "participantId": 8,
                "position": {
                    "x": 8027,
                    "y": 7999
                },
                "timeEnemySpentControlled": 5359,
                "totalGold": 862,
                "xp": 907
            },
            "9": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 35,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 92,
                    "attackSpeed": 115,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 184,
                    "healthMax": 653,
                    "healthRegen": 4,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 230,
                    "powerMax": 378,
                    "powerRegen": 13,
                    "spellVamp": 0
                },
                "currentGold": 417,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 211,
                    "physicalDamageDone": 2700,
                    "physicalDamageDoneToChampions": 743,
                    "physicalDamageTaken": 463,
                    "totalDamageDone": 2700,
                    "totalDamageDoneToChampions": 743,
                    "totalDamageTaken": 693,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 18
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 2,
                "minionsKilled": 12,
                "participantId": 9,
                "position": {
                    "x": 12561,
                    "y": 2567
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 1267,
                "xp": 457
            },
            "10": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 26,
                    "armor": 37,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 57,
                    "attackSpeed": 102,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 17,
                    "cooldownReduction": 0,
                    "health": 404,
                    "healthMax": 716,
                    "healthRegen": 22,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 129,
                    "powerMax": 345,
                    "powerRegen": 13,
                    "spellVamp": 0
                },
                "currentGold": 254,
                "damageStats": {
                    "magicDamageDone": 795,
                    "magicDamageDoneToChampions": 381,
                    "magicDamageTaken": 178,
                    "physicalDamageDone": 553,
                    "physicalDamageDoneToChampions": 213,
                    "physicalDamageTaken": 513,
                    "totalDamageDone": 1835,
                    "totalDamageDoneToChampions": 684,
                    "totalDamageTaken": 698,
                    "trueDamageDone": 485,
                    "trueDamageDoneToChampions": 90,
                    "trueDamageTaken": 6
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 2,
                "minionsKilled": 3,
                "participantId": 10,
                "position": {
                    "x": 12878,
                    "y": 1986
                },
                "timeEnemySpentControlled": 28075,
                "totalGold": 754,
                "xp": 457
            }
        },
        "timestamp": 180104
    },
    {
        "events": [
            {
                "assistingParticipantIds": [
                    9,
                    10
                ],
                "bounty": 300,
                "killStreakLength": 0,
                "killerId": 7,
                "position": {
                    "x": 12801,
                    "y": 2217
                },
                "shutdownBounty": 0,
                "timestamp": 180962,
                "type": "CHAMPION_KILL",
                "victimDamageDealt": [
                    {
                        "basic": false,
                        "magicDamage": 144,
                        "name": "TahmKench",
                        "participantId": 9,
                        "physicalDamage": 0,
                        "spellName": "tahmkenchq",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 20,
                        "name": "TahmKench",
                        "participantId": 9,
                        "physicalDamage": 0,
                        "spellName": "tahmkenchpassive",
                        "spellSlot": 63,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "TahmKench",
                        "participantId": 9,
                        "physicalDamage": 0,
                        "spellName": "summonerdot",
                        "spellSlot": 5,
                        "trueDamage": 18,
                        "type": "OTHER"
                    }
                ],
                "victimDamageReceived": [
                    {
                        "basic": false,
                        "magicDamage": 92,
                        "name": "Thresh",
                        "participantId": 10,
                        "physicalDamage": 0,
                        "spellName": "threshq",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 22,
                        "name": "Thresh",
                        "participantId": 10,
                        "physicalDamage": 0,
                        "spellName": "threshepassive",
                        "spellSlot": 2,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "Thresh",
                        "participantId": 10,
                        "physicalDamage": 38,
                        "spellName": "threshqleap",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Aphelios",
                        "participantId": 9,
                        "physicalDamage": 132,
                        "spellName": "aphelioscalibrumq",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Viego",
                        "participantId": 7,
                        "physicalDamage": 7,
                        "spellName": "",
                        "spellSlot": 65,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Viego",
                        "participantId": 7,
                        "physicalDamage": 0,
                        "spellName": "burning",
                        "spellSlot": -1,
                        "trueDamage": 8,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "Viego",
                        "participantId": 7,
                        "physicalDamage": 59,
                        "spellName": "viegobasicattack2",
                        "spellSlot": 65,
                        "trueDamage": 0,
                        "type": "OTHER"
                    }
                ],
                "victimId": 5
            },
            {
                "level": 3,
                "participantId": 6,
                "timestamp": 181326,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 6,
                "skillSlot": 2,
                "timestamp": 182253,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 1103,
                "participantId": 7,
                "timestamp": 183013,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 2003,
                "participantId": 7,
                "timestamp": 183013,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 2003,
                "participantId": 9,
                "timestamp": 185993,
                "type": "ITEM_DESTROYED"
            },
            {
                "assistingParticipantIds": [
                    4
                ],
                "bounty": 300,
                "killStreakLength": 0,
                "killerId": 5,
                "position": {
                    "x": 11542,
                    "y": 3234
                },
                "shutdownBounty": 0,
                "timestamp": 186291,
                "type": "CHAMPION_KILL",
                "victimDamageReceived": [
                    {
                        "basic": false,
                        "magicDamage": 61,
                        "name": "Caitlyn",
                        "participantId": 4,
                        "physicalDamage": 0,
                        "spellName": "caitlyne",
                        "spellSlot": 2,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Caitlyn",
                        "participantId": 4,
                        "physicalDamage": 190,
                        "spellName": "caitlynpassive",
                        "spellSlot": -1,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "Caitlyn",
                        "participantId": 4,
                        "physicalDamage": 172,
                        "spellName": "caitlynbasicattack",
                        "spellSlot": 64,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "Caitlyn",
                        "participantId": 4,
                        "physicalDamage": 47,
                        "spellName": "caitlynq",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "SRU_OrderMinionRanged",
                        "participantId": 0,
                        "physicalDamage": 71,
                        "spellName": "sru_orderminionrangedbasicattack2",
                        "spellSlot": 65,
                        "trueDamage": 0,
                        "type": "MINION"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "SRU_OrderMinionRanged",
                        "participantId": 0,
                        "physicalDamage": 30,
                        "spellName": "sru_orderminionsiegebasicattack",
                        "spellSlot": 64,
                        "trueDamage": 0,
                        "type": "MINION"
                    },
                    {
                        "basic": true,
                        "magicDamage": 0,
                        "name": "SRU_OrderMinionRanged",
                        "participantId": 0,
                        "physicalDamage": 62,
                        "spellName": "sru_orderminionrangedbasicattack",
                        "spellSlot": 64,
                        "trueDamage": 0,
                        "type": "MINION"
                    },
                    {
                        "basic": false,
                        "magicDamage": 0,
                        "name": "TahmKench",
                        "participantId": 5,
                        "physicalDamage": 0,
                        "spellName": "summonerdot",
                        "spellSlot": 5,
                        "trueDamage": 90,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 71,
                        "name": "TahmKench",
                        "participantId": 5,
                        "physicalDamage": 0,
                        "spellName": "tahmkenchq",
                        "spellSlot": 0,
                        "trueDamage": 0,
                        "type": "OTHER"
                    },
                    {
                        "basic": false,
                        "magicDamage": 10,
                        "name": "TahmKench",
                        "participantId": 5,
                        "physicalDamage": 0,
                        "spellName": "tahmkenchpassive",
                        "spellSlot": 63,
                        "trueDamage": 0,
                        "type": "OTHER"
                    }
                ],
                "victimId": 9
            },
            {
                "itemId": 1028,
                "participantId": 5,
                "timestamp": 189800,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 1042,
                "participantId": 9,
                "timestamp": 191156,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2055,
                "participantId": 5,
                "timestamp": 191618,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 4,
                "timestamp": 192544,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 3858,
                "participantId": 7,
                "timestamp": 193040,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 2055,
                "participantId": 9,
                "timestamp": 193139,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2003,
                "participantId": 9,
                "timestamp": 193638,
                "type": "ITEM_PURCHASED"
            },
            {
                "creatorId": 7,
                "timestamp": 194964,
                "type": "WARD_PLACED",
                "wardType": "YELLOW_TRINKET"
            },
            {
                "level": 4,
                "participantId": 2,
                "timestamp": 200255,
                "type": "LEVEL_UP"
            },
            {
                "level": 4,
                "participantId": 3,
                "timestamp": 200389,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 2,
                "skillSlot": 1,
                "timestamp": 201413,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 4,
                "participantId": 1,
                "timestamp": 201744,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 3,
                "skillSlot": 1,
                "timestamp": 203231,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 3,
                "participantId": 4,
                "timestamp": 204785,
                "type": "LEVEL_UP"
            },
            {
                "level": 4,
                "participantId": 8,
                "timestamp": 207069,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 1,
                "skillSlot": 1,
                "timestamp": 207532,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 8,
                "skillSlot": 1,
                "timestamp": 208794,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 4,
                "skillSlot": 1,
                "timestamp": 215580,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "creatorId": 1,
                "timestamp": 215910,
                "type": "WARD_PLACED",
                "wardType": "YELLOW_TRINKET"
            },
            {
                "level": 4,
                "participantId": 6,
                "timestamp": 216108,
                "type": "LEVEL_UP"
            },
            {
                "itemId": 2055,
                "participantId": 5,
                "timestamp": 218127,
                "type": "ITEM_DESTROYED"
            },
            {
                "creatorId": 5,
                "timestamp": 218127,
                "type": "WARD_PLACED",
                "wardType": "CONTROL_WARD"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 6,
                "skillSlot": 1,
                "timestamp": 218425,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "level": 3,
                "participantId": 10,
                "timestamp": 219818,
                "type": "LEVEL_UP"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 10,
                "skillSlot": 2,
                "timestamp": 220843,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "creatorId": 3,
                "timestamp": 225307,
                "type": "WARD_PLACED",
                "wardType": "YELLOW_TRINKET"
            },
            {
                "level": 3,
                "participantId": 5,
                "timestamp": 231955,
                "type": "LEVEL_UP"
            },
            {
                "creatorId": 8,
                "timestamp": 232650,
                "type": "WARD_PLACED",
                "wardType": "YELLOW_TRINKET"
            },
            {
                "levelUpType": "NORMAL",
                "participantId": 5,
                "skillSlot": 3,
                "timestamp": 234737,
                "type": "SKILL_LEVEL_UP"
            },
            {
                "itemId": 2003,
                "participantId": 6,
                "timestamp": 237979,
                "type": "ITEM_DESTROYED"
            },
            {
                "itemId": 3070,
                "participantId": 3,
                "timestamp": 238871,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2031,
                "participantId": 3,
                "timestamp": 239402,
                "type": "ITEM_PURCHASED"
            },
            {
                "itemId": 2055,
                "participantId": 3,
                "timestamp": 239831,
                "type": "ITEM_PURCHASED"
            }
        ],
        "participantFrames": {
            "1": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 48,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 95,
                    "attackSpeed": 108,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 5,
                    "cooldownReduction": 0,
                    "health": 956,
                    "healthMax": 988,
                    "healthRegen": 10,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 44,
                    "movementSpeed": 345,
                    "omnivamp": 2,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 0,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 739,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 327,
                    "physicalDamageDone": 4635,
                    "physicalDamageDoneToChampions": 909,
                    "physicalDamageTaken": 195,
                    "totalDamageDone": 4635,
                    "totalDamageDoneToChampions": 909,
                    "totalDamageTaken": 522,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 4,
                "minionsKilled": 23,
                "participantId": 1,
                "position": {
                    "x": 2989,
                    "y": 12906
                },
                "timeEnemySpentControlled": 4468,
                "totalGold": 1239,
                "xp": 1446
            },
            "2": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 54,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 86,
                    "attackSpeed": 106,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 901,
                    "healthMax": 901,
                    "healthRegen": 19,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 36,
                    "movementSpeed": 340,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 523,
                    "powerMax": 523,
                    "powerRegen": 129,
                    "spellVamp": 0
                },
                "currentGold": 901,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 509,
                    "physicalDamageDone": 13287,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 1865,
                    "totalDamageDone": 17327,
                    "totalDamageDoneToChampions": 0,
                    "totalDamageTaken": 2375,
                    "trueDamageDone": 4039,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 28,
                "level": 4,
                "minionsKilled": 0,
                "participantId": 2,
                "position": {
                    "x": 10101,
                    "y": 7201
                },
                "timeEnemySpentControlled": 82947,
                "totalGold": 1401,
                "xp": 1333
            },
            "3": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 28,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 65,
                    "attackSpeed": 113,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 563,
                    "healthMax": 855,
                    "healthRegen": 15,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 40,
                    "movementSpeed": 363,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 467,
                    "powerMax": 967,
                    "powerRegen": 19,
                    "spellVamp": 0
                },
                "currentGold": 89,
                "damageStats": {
                    "magicDamageDone": 4611,
                    "magicDamageDoneToChampions": 605,
                    "magicDamageTaken": 503,
                    "physicalDamageDone": 2556,
                    "physicalDamageDoneToChampions": 95,
                    "physicalDamageTaken": 770,
                    "totalDamageDone": 7185,
                    "totalDamageDoneToChampions": 717,
                    "totalDamageTaken": 1351,
                    "trueDamageDone": 16,
                    "trueDamageDoneToChampions": 16,
                    "trueDamageTaken": 76
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 4,
                "minionsKilled": 23,
                "participantId": 3,
                "position": {
                    "x": 439,
                    "y": 490
                },
                "timeEnemySpentControlled": 60314,
                "totalGold": 1214,
                "xp": 1453
            },
            "4": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 39,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 84,
                    "attackSpeed": 115,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 532,
                    "healthMax": 737,
                    "healthRegen": 8,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 31,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 189,
                    "powerMax": 374,
                    "powerRegen": 16,
                    "spellVamp": 0
                },
                "currentGold": 958,
                "damageStats": {
                    "magicDamageDone": 141,
                    "magicDamageDoneToChampions": 61,
                    "magicDamageTaken": 64,
                    "physicalDamageDone": 6640,
                    "physicalDamageDoneToChampions": 961,
                    "physicalDamageTaken": 538,
                    "totalDamageDone": 6781,
                    "totalDamageDoneToChampions": 1022,
                    "totalDamageTaken": 634,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 32
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 3,
                "minionsKilled": 29,
                "participantId": 4,
                "position": {
                    "x": 11741,
                    "y": 2281
                },
                "timeEnemySpentControlled": 4137,
                "totalGold": 1458,
                "xp": 1053
            },
            "5": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 14,
                    "armor": 54,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 60,
                    "attackSpeed": 118,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 929,
                    "healthMax": 980,
                    "healthRegen": 21,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 35,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 362,
                    "powerMax": 398,
                    "powerRegen": 18,
                    "spellVamp": 0
                },
                "currentGold": 247,
                "damageStats": {
                    "magicDamageDone": 519,
                    "magicDamageDoneToChampions": 388,
                    "magicDamageTaken": 333,
                    "physicalDamageDone": 636,
                    "physicalDamageDoneToChampions": 0,
                    "physicalDamageTaken": 882,
                    "totalDamageDone": 2439,
                    "totalDamageDoneToChampions": 478,
                    "totalDamageTaken": 1314,
                    "trueDamageDone": 1283,
                    "trueDamageDoneToChampions": 90,
                    "trueDamageTaken": 98
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 3,
                "minionsKilled": 5,
                "participantId": 5,
                "position": {
                    "x": 11645,
                    "y": 3306
                },
                "timeEnemySpentControlled": 10421,
                "totalGold": 1222,
                "xp": 714
            },
            "6": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 24,
                    "armor": 52,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 70,
                    "attackSpeed": 112,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 5,
                    "cooldownReduction": 0,
                    "health": 498,
                    "healthMax": 950,
                    "healthRegen": 114,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 5,
                    "magicResist": 36,
                    "movementSpeed": 335,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 0,
                    "powerMax": 285,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 613,
                "damageStats": {
                    "magicDamageDone": 3572,
                    "magicDamageDoneToChampions": 327,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 1565,
                    "physicalDamageDoneToChampions": 102,
                    "physicalDamageTaken": 1016,
                    "totalDamageDone": 5137,
                    "totalDamageDoneToChampions": 430,
                    "totalDamageTaken": 1016,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 4,
                "minionsKilled": 17,
                "participantId": 6,
                "position": {
                    "x": 3444,
                    "y": 13453
                },
                "timeEnemySpentControlled": 2120,
                "totalGold": 1113,
                "xp": 1324
            },
            "7": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 47,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 67,
                    "attackSpeed": 121,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 790,
                    "healthMax": 790,
                    "healthRegen": 16,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 35,
                    "movementSpeed": 345,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 10000,
                    "powerMax": 10000,
                    "powerRegen": 0,
                    "spellVamp": 0
                },
                "currentGold": 1221,
                "damageStats": {
                    "magicDamageDone": 477,
                    "magicDamageDoneToChampions": 61,
                    "magicDamageTaken": 0,
                    "physicalDamageDone": 8617,
                    "physicalDamageDoneToChampions": 412,
                    "physicalDamageTaken": 1616,
                    "totalDamageDone": 13738,
                    "totalDamageDoneToChampions": 513,
                    "totalDamageTaken": 1616,
                    "trueDamageDone": 4643,
                    "trueDamageDoneToChampions": 40,
                    "trueDamageTaken": 0
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 20,
                "level": 3,
                "minionsKilled": 4,
                "participantId": 7,
                "position": {
                    "x": 11359,
                    "y": 6318
                },
                "timeEnemySpentControlled": 77992,
                "totalGold": 1721,
                "xp": 1059
            },
            "8": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 26,
                    "armor": 31,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 59,
                    "attackSpeed": 114,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 564,
                    "healthMax": 877,
                    "healthRegen": 7,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 40,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 348,
                    "powerMax": 549,
                    "powerRegen": 19,
                    "spellVamp": 0
                },
                "currentGold": 642,
                "damageStats": {
                    "magicDamageDone": 1825,
                    "magicDamageDoneToChampions": 416,
                    "magicDamageTaken": 508,
                    "physicalDamageDone": 2964,
                    "physicalDamageDoneToChampions": 319,
                    "physicalDamageTaken": 270,
                    "totalDamageDone": 5740,
                    "totalDamageDoneToChampions": 812,
                    "totalDamageTaken": 789,
                    "trueDamageDone": 950,
                    "trueDamageDoneToChampions": 76,
                    "trueDamageTaken": 10
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 4,
                "minionsKilled": 21,
                "participantId": 8,
                "position": {
                    "x": 7424,
                    "y": 7602
                },
                "timeEnemySpentControlled": 5359,
                "totalGold": 1142,
                "xp": 1460
            },
            "9": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 0,
                    "armor": 35,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 95,
                    "attackSpeed": 123,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 0,
                    "cooldownReduction": 0,
                    "health": 515,
                    "healthMax": 653,
                    "healthRegen": 7,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 30,
                    "movementSpeed": 325,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 378,
                    "powerMax": 378,
                    "powerRegen": 13,
                    "spellVamp": 0
                },
                "currentGold": 265,
                "damageStats": {
                    "magicDamageDone": 0,
                    "magicDamageDoneToChampions": 0,
                    "magicDamageTaken": 367,
                    "physicalDamageDone": 3964,
                    "physicalDamageDoneToChampions": 743,
                    "physicalDamageTaken": 652,
                    "totalDamageDone": 3964,
                    "totalDamageDoneToChampions": 743,
                    "totalDamageTaken": 1110,
                    "trueDamageDone": 0,
                    "trueDamageDoneToChampions": 0,
                    "trueDamageTaken": 90
                },
                "goldPerSecond": 0,
                "jungleMinionsKilled": 0,
                "level": 2,
                "minionsKilled": 17,
                "participantId": 9,
                "position": {
                    "x": 13467,
                    "y": 4440
                },
                "timeEnemySpentControlled": 0,
                "totalGold": 1540,
                "xp": 614
            },
            "10": {
                "championStats": {
                    "abilityHaste": 0,
                    "abilityPower": 30,
                    "armor": 41,
                    "armorPen": 0,
                    "armorPenPercent": 0,
                    "attackDamage": 59,
                    "attackSpeed": 105,
                    "bonusArmorPenPercent": 0,
                    "bonusMagicPenPercent": 0,
                    "ccReduction": 9,
                    "cooldownReduction": 0,
                    "health": 692,
                    "healthMax": 807,
                    "healthRegen": 23,
                    "lifesteal": 0,
                    "magicPen": 0,
                    "magicPenPercent": 0,
                    "magicResist": 31,
                    "movementSpeed": 330,
                    "omnivamp": 0,
                    "physicalVamp": 0,
                    "power": 243,
                    "powerMax": 378,
                    "powerRegen": 14,
                    "spellVamp": 0
                },
                "currentGold": 619,
                "damageStats": {
                    "magicDamageDone": 983,
                    "magicDamageDoneToChampions": 424,
                    "magicDamageTaken": 178,
                    "physicalDamageDone": 941,
                    "physicalDamageDoneToChampions": 251,
                    "physicalDamageTaken": 546,
                    "totalDamageDone": 2622,
                    "totalDamageDoneToChampions": 765,
                    "totalDamageTaken": 730,
                    "trueDamageDone": 698,
                    "trueDamageDoneToChampions": 90,
                    "trueDamageTaken": 6
                },
                "goldPerSecond": 20,
                "jungleMinionsKilled": 0,
                "level": 3,
                "minionsKilled": 10,
                "participantId": 10,
                "position": {
                    "x": 13585,
                    "y": 4396
                },
                "timeEnemySpentControlled": 28075,
                "totalGold": 1119,
                "xp": 912
            }
        },
        "timestamp": 240130
    }
]

let test = new TimeLine(frames)

export { test }