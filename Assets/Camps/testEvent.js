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
                    "realTimestamp": 1679971940399,
                    "timestamp": 0,
                    "type": "PAUSE_END"
                }
            ],
            "participantFrames": {
                "1": {
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
                        "health": 620,
                        "healthMax": 620,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 32,
                        "movementSpeed": 345,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 500,
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
                        "armor": 36,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 25,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 643,
                        "healthMax": 643,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 32,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 327,
                        "powerMax": 327,
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
                        "armor": 24,
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
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 375,
                        "powerMax": 375,
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
                        "armor": 40,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 25,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 633,
                        "healthMax": 633,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 28,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 267,
                        "powerMax": 267,
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
                        "armor": 24,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 25,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 598,
                        "healthMax": 598,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 334,
                        "powerMax": 334,
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
                        "armor": 38,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 25,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 665,
                        "healthMax": 665,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 32,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
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
                        "health": 630,
                        "healthMax": 630,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 340,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 425,
                        "powerMax": 425,
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
                        "health": 630,
                        "healthMax": 630,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 260,
                        "powerMax": 260,
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
                        "health": 560,
                        "healthMax": 560,
                        "healthRegen": 0,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 365,
                        "powerMax": 365,
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
                    "levelUpType": "NORMAL",
                    "participantId": 4,
                    "skillSlot": 1,
                    "timestamp": 1946,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "itemId": 1055,
                    "participantId": 9,
                    "timestamp": 5084,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 9,
                    "timestamp": 5249,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 9,
                    "timestamp": 6274,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1056,
                    "participantId": 6,
                    "timestamp": 7761,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3858,
                    "participantId": 5,
                    "timestamp": 7761,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 5,
                    "timestamp": 7761,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 5,
                    "timestamp": 7761,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 5,
                    "timestamp": 8224,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 6,
                    "timestamp": 8884,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 6,
                    "timestamp": 9049,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1056,
                    "participantId": 3,
                    "timestamp": 11164,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 3,
                    "timestamp": 11164,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 3,
                    "timestamp": 11164,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1056,
                    "participantId": 8,
                    "timestamp": 11890,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3070,
                    "participantId": 4,
                    "timestamp": 12716,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 4,
                    "timestamp": 12716,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 4,
                    "timestamp": 12716,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 4,
                    "timestamp": 13079,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1102,
                    "participantId": 2,
                    "timestamp": 13971,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1101,
                    "participantId": 7,
                    "timestamp": 14400,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "afterId": 0,
                    "beforeId": 2003,
                    "goldGain": 50,
                    "participantId": 3,
                    "timestamp": 14598,
                    "type": "ITEM_UNDO"
                },
                {
                    "itemId": 2003,
                    "participantId": 2,
                    "timestamp": 14697,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "afterId": 0,
                    "beforeId": 2003,
                    "goldGain": 50,
                    "participantId": 3,
                    "timestamp": 14730,
                    "type": "ITEM_UNDO"
                },
                {
                    "afterId": 0,
                    "beforeId": 1056,
                    "goldGain": 400,
                    "participantId": 3,
                    "timestamp": 14863,
                    "type": "ITEM_UNDO"
                },
                {
                    "itemId": 2003,
                    "participantId": 8,
                    "timestamp": 15028,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 2,
                    "timestamp": 15094,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 8,
                    "timestamp": 15226,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 7,
                    "timestamp": 15358,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3070,
                    "participantId": 3,
                    "timestamp": 17306,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 3,
                    "timestamp": 17306,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 3,
                    "timestamp": 17306,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 3,
                    "timestamp": 17934,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3850,
                    "participantId": 10,
                    "timestamp": 19486,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 10,
                    "timestamp": 19486,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 10,
                    "timestamp": 19486,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 10,
                    "timestamp": 19915,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 2,
                    "skillSlot": 1,
                    "timestamp": 37820,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 5,
                    "skillSlot": 1,
                    "timestamp": 39636,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "creatorId": 5,
                    "timestamp": 47828,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 9,
                    "skillSlot": 1,
                    "timestamp": 49116,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "assistingParticipantIds": [
                        4,
                        5
                    ],
                    "bounty": 400,
                    "killStreakLength": 0,
                    "killerId": 2,
                    "position": {
                        "x": 11599,
                        "y": 6523
                    },
                    "shutdownBounty": 0,
                    "timestamp": 54668,
                    "type": "CHAMPION_KILL",
                    "victimDamageReceived": [
                        {
                            "basic": false,
                            "magicDamage": 0,
                            "name": "Ezreal",
                            "participantId": 4,
                            "physicalDamage": 32,
                            "spellName": "",
                            "spellSlot": -1,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "Ezreal",
                            "participantId": 4,
                            "physicalDamage": 120,
                            "spellName": "ezrealbasicattack",
                            "spellSlot": 64,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 85,
                            "name": "Blitzcrank",
                            "participantId": 5,
                            "physicalDamage": 0,
                            "spellName": "rocketgrab",
                            "spellSlot": 0,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "Blitzcrank",
                            "participantId": 5,
                            "physicalDamage": 46,
                            "spellName": "blitzcrankbasicattack2",
                            "spellSlot": 65,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "Blitzcrank",
                            "participantId": 5,
                            "physicalDamage": 46,
                            "spellName": "blitzcrankbasicattack",
                            "spellSlot": 64,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 14,
                            "name": "Khazix",
                            "participantId": 2,
                            "physicalDamage": 0,
                            "spellName": "khazixpassive",
                            "spellSlot": 63,
                            "trueDamage": 11,
                            "type": "OTHER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "Khazix",
                            "participantId": 2,
                            "physicalDamage": 110,
                            "spellName": "khazixbasicattack2",
                            "spellSlot": 65,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 0,
                            "name": "Khazix",
                            "participantId": 2,
                            "physicalDamage": 122,
                            "spellName": "khazixq",
                            "spellSlot": 0,
                            "trueDamage": 0,
                            "type": "OTHER"
                        }
                    ],
                    "victimId": 10
                },
                {
                    "killType": "KILL_FIRST_BLOOD",
                    "killerId": 2,
                    "position": {
                        "x": 11525,
                        "y": 6458
                    },
                    "timestamp": 54668,
                    "type": "CHAMPION_SPECIAL_KILL"
                },
                {
                    "itemId": 1054,
                    "participantId": 1,
                    "timestamp": 55560,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "creatorId": 2,
                    "timestamp": 55923,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "itemId": 2003,
                    "participantId": 1,
                    "timestamp": 55989,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 1,
                    "timestamp": 56221,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 3,
                    "skillSlot": 1,
                    "timestamp": 57575,
                    "type": "SKILL_LEVEL_UP"
                }
            ],
            "participantFrames": {
                "1": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 28,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 65,
                        "attackSpeed": 113,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 5,
                        "cooldownReduction": 0,
                        "health": 700,
                        "healthMax": 700,
                        "healthRegen": 23,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 40,
                        "movementSpeed": 704,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 500,
                        "powerRegen": 0,
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
                    "participantId": 1,
                    "position": {
                        "x": 751,
                        "y": 2912
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 500,
                    "xp": 0
                },
                "2": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 36,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 73,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 658,
                        "healthMax": 658,
                        "healthRegen": 15,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 32,
                        "movementSpeed": 363,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 318,
                        "powerMax": 327,
                        "powerRegen": 18,
                        "spellVamp": 0
                    },
                    "currentGold": 416,
                    "damageStats": {
                        "magicDamageDone": 14,
                        "magicDamageDoneToChampions": 14,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 232,
                        "physicalDamageDoneToChampions": 232,
                        "physicalDamageTaken": 0,
                        "totalDamageDone": 257,
                        "totalDamageDoneToChampions": 257,
                        "totalDamageTaken": 0,
                        "trueDamageDone": 11,
                        "trueDamageDoneToChampions": 11,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 0,
                    "participantId": 2,
                    "position": {
                        "x": 11721,
                        "y": 5923
                    },
                    "timeEnemySpentControlled": 2015,
                    "totalGold": 916,
                    "xp": 9
                },
                "3": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 9,
                        "armor": 18,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 58,
                        "attackSpeed": 110,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 550,
                        "healthMax": 550,
                        "healthRegen": 13,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 38,
                        "movementSpeed": 363,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 710,
                        "powerMax": 710,
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
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 0,
                    "participantId": 3,
                    "position": {
                        "x": 6964,
                        "y": 7090
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 500,
                    "xp": 0
                },
                "4": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 30,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 65,
                        "attackSpeed": 110,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 600,
                        "healthMax": 600,
                        "healthRegen": 8,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 615,
                        "powerMax": 615,
                        "powerRegen": 17,
                        "spellVamp": 0
                    },
                    "currentGold": 50,
                    "damageStats": {
                        "magicDamageDone": 0,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 152,
                        "physicalDamageDoneToChampions": 152,
                        "physicalDamageTaken": 0,
                        "totalDamageDone": 152,
                        "totalDamageDoneToChampions": 152,
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
                        "x": 11175,
                        "y": 4835
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 550,
                    "xp": 9
                },
                "5": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 5,
                        "armor": 46,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 62,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 5,
                        "cooldownReduction": 0,
                        "health": 663,
                        "healthMax": 663,
                        "healthRegen": 22,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 36,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 178,
                        "powerMax": 267,
                        "powerRegen": 17,
                        "spellVamp": 0
                    },
                    "currentGold": 50,
                    "damageStats": {
                        "magicDamageDone": 85,
                        "magicDamageDoneToChampions": 85,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 92,
                        "physicalDamageDoneToChampions": 92,
                        "physicalDamageTaken": 0,
                        "totalDamageDone": 177,
                        "totalDamageDoneToChampions": 177,
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
                        "x": 11190,
                        "y": 5427
                    },
                    "timeEnemySpentControlled": 2280,
                    "totalGold": 550,
                    "xp": 9
                },
                "6": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 15,
                        "armor": 30,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 54,
                        "attackSpeed": 133,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 683,
                        "healthMax": 683,
                        "healthRegen": 11,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 333,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 334,
                        "powerMax": 334,
                        "powerRegen": 19,
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
                    "participantId": 6,
                    "position": {
                        "x": 3053,
                        "y": 12748
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 500,
                    "xp": 0
                },
                "7": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 49,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 71,
                        "attackSpeed": 113,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 665,
                        "healthMax": 665,
                        "healthRegen": 17,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 37,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 100,
                        "powerRegen": 0,
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
                    "participantId": 7,
                    "position": {
                        "x": 8373,
                        "y": 7960
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 500,
                    "xp": 0
                },
                "8": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 24,
                        "armor": 27,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 58,
                        "attackSpeed": 110,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 700,
                        "healthMax": 700,
                        "healthRegen": 13,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 345,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 425,
                        "powerMax": 425,
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
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 0,
                    "participantId": 8,
                    "position": {
                        "x": 8542,
                        "y": 7986
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 500,
                    "xp": 0
                },
                "9": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 32,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 74,
                        "attackSpeed": 110,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 710,
                        "healthMax": 710,
                        "healthRegen": 7,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 325,
                        "omnivamp": 2,
                        "physicalVamp": 0,
                        "power": 260,
                        "powerMax": 260,
                        "powerRegen": 13,
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
                    "participantId": 9,
                    "position": {
                        "x": 9943,
                        "y": 8070
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 500,
                    "xp": 0
                },
                "10": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 17,
                        "armor": 34,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 48,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 0,
                        "healthMax": 570,
                        "healthRegen": 10,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 365,
                        "powerMax": 365,
                        "powerRegen": 28,
                        "spellVamp": 0
                    },
                    "currentGold": 0,
                    "damageStats": {
                        "magicDamageDone": 0,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 99,
                        "physicalDamageDone": 0,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 477,
                        "totalDamageDone": 0,
                        "totalDamageDoneToChampions": 0,
                        "totalDamageTaken": 588,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 11
                    },
                    "goldPerSecond": 20,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 0,
                    "participantId": 10,
                    "position": {
                        "x": 11599,
                        "y": 6523
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 500,
                    "xp": 0
                }
            },
            "timestamp": 60019
        },
        {
            "events": [
                {
                    "itemId": 1036,
                    "participantId": 2,
                    "timestamp": 67262,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 3340,
                    "participantId": 2,
                    "timestamp": 68484,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 3364,
                    "participantId": 2,
                    "timestamp": 68484,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 7,
                    "skillSlot": 3,
                    "timestamp": 72649,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 10,
                    "skillSlot": 1,
                    "timestamp": 81045,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 8,
                    "skillSlot": 1,
                    "timestamp": 91681,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 1,
                    "skillSlot": 1,
                    "timestamp": 93563,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 6,
                    "skillSlot": 3,
                    "timestamp": 98749,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 2,
                    "participantId": 2,
                    "timestamp": 103771,
                    "type": "LEVEL_UP"
                },
                {
                    "creatorId": 10,
                    "timestamp": 104167,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 2,
                    "skillSlot": 2,
                    "timestamp": 104431,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 2,
                    "participantId": 7,
                    "timestamp": 106515,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 7,
                    "skillSlot": 2,
                    "timestamp": 108067,
                    "type": "SKILL_LEVEL_UP"
                }
            ],
            "participantFrames": {
                "1": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 28,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 65,
                        "attackSpeed": 113,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 7,
                        "cooldownReduction": 0,
                        "health": 645,
                        "healthMax": 700,
                        "healthRegen": 26,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 40,
                        "movementSpeed": 345,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 500,
                        "powerRegen": 0,
                        "spellVamp": 0
                    },
                    "currentGold": 21,
                    "damageStats": {
                        "magicDamageDone": 0,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 13,
                        "physicalDamageDone": 202,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 42,
                        "totalDamageDone": 202,
                        "totalDamageDoneToChampions": 0,
                        "totalDamageTaken": 55,
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
                        "x": 1778,
                        "y": 12620
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 521,
                    "xp": 0
                },
                "2": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 39,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 86,
                        "attackSpeed": 101,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 400,
                        "healthMax": 736,
                        "healthRegen": 16,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 33,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 354,
                        "powerMax": 355,
                        "powerRegen": 103,
                        "spellVamp": 0
                    },
                    "currentGold": 177,
                    "damageStats": {
                        "magicDamageDone": 14,
                        "magicDamageDoneToChampions": 14,
                        "magicDamageTaken": 425,
                        "physicalDamageDone": 3030,
                        "physicalDamageDoneToChampions": 232,
                        "physicalDamageTaken": 413,
                        "totalDamageDone": 4177,
                        "totalDamageDoneToChampions": 257,
                        "totalDamageTaken": 839,
                        "trueDamageDone": 1133,
                        "trueDamageDoneToChampions": 11,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 4,
                    "level": 2,
                    "minionsKilled": 0,
                    "participantId": 2,
                    "position": {
                        "x": 2800,
                        "y": 7935
                    },
                    "timeEnemySpentControlled": 2015,
                    "totalGold": 1027,
                    "xp": 334
                },
                "3": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 9,
                        "armor": 18,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 58,
                        "attackSpeed": 110,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 387,
                        "healthMax": 550,
                        "healthRegen": 13,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 38,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 585,
                        "powerMax": 753,
                        "powerRegen": 16,
                        "spellVamp": 0
                    },
                    "currentGold": 111,
                    "damageStats": {
                        "magicDamageDone": 821,
                        "magicDamageDoneToChampions": 182,
                        "magicDamageTaken": 97,
                        "physicalDamageDone": 756,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 98,
                        "totalDamageDone": 1586,
                        "totalDamageDoneToChampions": 191,
                        "totalDamageTaken": 196,
                        "trueDamageDone": 8,
                        "trueDamageDoneToChampions": 8,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 5,
                    "participantId": 3,
                    "position": {
                        "x": 7778,
                        "y": 7296
                    },
                    "timeEnemySpentControlled": 3500,
                    "totalGold": 611,
                    "xp": 276
                },
                "4": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 30,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 65,
                        "attackSpeed": 110,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 600,
                        "healthMax": 600,
                        "healthRegen": 8,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 593,
                        "powerMax": 615,
                        "powerRegen": 17,
                        "spellVamp": 0
                    },
                    "currentGold": 134,
                    "damageStats": {
                        "magicDamageDone": 0,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 504,
                        "physicalDamageDoneToChampions": 152,
                        "physicalDamageTaken": 0,
                        "totalDamageDone": 504,
                        "totalDamageDoneToChampions": 152,
                        "totalDamageTaken": 0,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 3,
                    "participantId": 4,
                    "position": {
                        "x": 11915,
                        "y": 2116
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 634,
                    "xp": 122
                },
                "5": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 5,
                        "armor": 46,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 62,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 7,
                        "cooldownReduction": 0,
                        "health": 601,
                        "healthMax": 663,
                        "healthRegen": 22,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 36,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 180,
                        "powerMax": 267,
                        "powerRegen": 17,
                        "spellVamp": 0
                    },
                    "currentGold": 73,
                    "damageStats": {
                        "magicDamageDone": 85,
                        "magicDamageDoneToChampions": 85,
                        "magicDamageTaken": 77,
                        "physicalDamageDone": 92,
                        "physicalDamageDoneToChampions": 92,
                        "physicalDamageTaken": 0,
                        "totalDamageDone": 177,
                        "totalDamageDoneToChampions": 177,
                        "totalDamageTaken": 77,
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
                        "x": 11762,
                        "y": 1575
                    },
                    "timeEnemySpentControlled": 2280,
                    "totalGold": 573,
                    "xp": 122
                },
                "6": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 15,
                        "armor": 30,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 54,
                        "attackSpeed": 113,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 676,
                        "healthMax": 683,
                        "healthRegen": 11,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 333,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 334,
                        "powerMax": 334,
                        "powerRegen": 19,
                        "spellVamp": 0
                    },
                    "currentGold": 84,
                    "damageStats": {
                        "magicDamageDone": 210,
                        "magicDamageDoneToChampions": 13,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 455,
                        "physicalDamageDoneToChampions": 42,
                        "physicalDamageTaken": 18,
                        "totalDamageDone": 665,
                        "totalDamageDoneToChampions": 55,
                        "totalDamageTaken": 18,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 3,
                    "participantId": 6,
                    "position": {
                        "x": 1824,
                        "y": 12036
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 584,
                    "xp": 215
                },
                "7": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 52,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 73,
                        "attackSpeed": 114,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 330,
                        "healthMax": 743,
                        "healthRegen": 25,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 38,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 100,
                        "powerRegen": 0,
                        "spellVamp": 0
                    },
                    "currentGold": 111,
                    "damageStats": {
                        "magicDamageDone": 1387,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 1373,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 858,
                        "totalDamageDone": 4068,
                        "totalDamageDoneToChampions": 0,
                        "totalDamageTaken": 858,
                        "trueDamageDone": 1307,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 4,
                    "level": 2,
                    "minionsKilled": 0,
                    "participantId": 7,
                    "position": {
                        "x": 6431,
                        "y": 12402
                    },
                    "timeEnemySpentControlled": 3171,
                    "totalGold": 611,
                    "xp": 325
                },
                "8": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 24,
                        "armor": 27,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 58,
                        "attackSpeed": 110,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 485,
                        "healthMax": 700,
                        "healthRegen": 13,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 340,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 425,
                        "powerMax": 425,
                        "powerRegen": 16,
                        "spellVamp": 0
                    },
                    "currentGold": 81,
                    "damageStats": {
                        "magicDamageDone": 97,
                        "magicDamageDoneToChampions": 97,
                        "magicDamageTaken": 182,
                        "physicalDamageDone": 476,
                        "physicalDamageDoneToChampions": 98,
                        "physicalDamageTaken": 75,
                        "totalDamageDone": 574,
                        "totalDamageDoneToChampions": 196,
                        "totalDamageTaken": 267,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 8
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 3,
                    "participantId": 8,
                    "position": {
                        "x": 8133,
                        "y": 8314
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 581,
                    "xp": 185
                },
                "9": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 32,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 74,
                        "attackSpeed": 140,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 710,
                        "healthMax": 710,
                        "healthRegen": 7,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 325,
                        "omnivamp": 2,
                        "physicalVamp": 0,
                        "power": 260,
                        "powerMax": 260,
                        "powerRegen": 13,
                        "spellVamp": 0
                    },
                    "currentGold": 112,
                    "damageStats": {
                        "magicDamageDone": 0,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 890,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 0,
                        "totalDamageDone": 890,
                        "totalDamageDoneToChampions": 0,
                        "totalDamageTaken": 0,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 5,
                    "participantId": 9,
                    "position": {
                        "x": 12577,
                        "y": 2499
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 612,
                    "xp": 150
                },
                "10": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 17,
                        "armor": 34,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 48,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 570,
                        "healthMax": 570,
                        "healthRegen": 10,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 338,
                        "powerMax": 390,
                        "powerRegen": 28,
                        "spellVamp": 0
                    },
                    "currentGold": 43,
                    "damageStats": {
                        "magicDamageDone": 182,
                        "magicDamageDoneToChampions": 77,
                        "magicDamageTaken": 99,
                        "physicalDamageDone": 0,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 477,
                        "totalDamageDone": 182,
                        "totalDamageDoneToChampions": 77,
                        "totalDamageTaken": 588,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 11
                    },
                    "goldPerSecond": 20,
                    "jungleMinionsKilled": 0,
                    "level": 1,
                    "minionsKilled": 0,
                    "participantId": 10,
                    "position": {
                        "x": 13010,
                        "y": 1983
                    },
                    "timeEnemySpentControlled": 5153,
                    "totalGold": 543,
                    "xp": 150
                }
            },
            "timestamp": 120027
        },
        {
            "events": [
                {
                    "level": 2,
                    "participantId": 3,
                    "timestamp": 122076,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 3,
                    "skillSlot": 3,
                    "timestamp": 124620,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "itemId": 2003,
                    "participantId": 8,
                    "timestamp": 125282,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "level": 2,
                    "participantId": 8,
                    "timestamp": 130800,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 8,
                    "skillSlot": 2,
                    "timestamp": 131923,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "itemId": 2003,
                    "participantId": 3,
                    "timestamp": 133079,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "level": 2,
                    "participantId": 6,
                    "timestamp": 135591,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 2,
                    "participantId": 9,
                    "timestamp": 139759,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 2,
                    "participantId": 10,
                    "timestamp": 139759,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 6,
                    "skillSlot": 1,
                    "timestamp": 140486,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 10,
                    "skillSlot": 2,
                    "timestamp": 141840,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 2,
                    "timestamp": 143590,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 2,
                    "skillSlot": 3,
                    "timestamp": 144516,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 7,
                    "timestamp": 145905,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 9,
                    "skillSlot": 2,
                    "timestamp": 146334,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 2,
                    "participantId": 4,
                    "timestamp": 146499,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 2,
                    "participantId": 5,
                    "timestamp": 146499,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 4,
                    "skillSlot": 3,
                    "timestamp": 147821,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 5,
                    "skillSlot": 3,
                    "timestamp": 147854,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 7,
                    "skillSlot": 1,
                    "timestamp": 148482,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "creatorId": 9,
                    "timestamp": 152349,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "level": 2,
                    "participantId": 1,
                    "timestamp": 154364,
                    "type": "LEVEL_UP"
                },
                {
                    "creatorId": 4,
                    "timestamp": 155883,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 1,
                    "skillSlot": 2,
                    "timestamp": 156644,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "itemId": 2003,
                    "participantId": 3,
                    "timestamp": 160409,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2010,
                    "participantId": 3,
                    "timestamp": 160607,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2003,
                    "participantId": 8,
                    "timestamp": 164074,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "level": 3,
                    "participantId": 6,
                    "timestamp": 166882,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 6,
                    "skillSlot": 3,
                    "timestamp": 169161,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 8,
                    "timestamp": 173653,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 3,
                    "timestamp": 173984,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 8,
                    "skillSlot": 3,
                    "timestamp": 174545,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 3,
                    "skillSlot": 2,
                    "timestamp": 174942,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "creatorId": 10,
                    "timestamp": 175041,
                    "type": "WARD_PLACED",
                    "wardType": "UNDEFINED"
                },
                {
                    "level": 3,
                    "participantId": 1,
                    "timestamp": 176031,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 1,
                    "skillSlot": 3,
                    "timestamp": 178277,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "itemId": 2003,
                    "participantId": 2,
                    "timestamp": 178376,
                    "type": "ITEM_DESTROYED"
                }
            ],
            "participantFrames": {
                "1": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 34,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 68,
                        "attackSpeed": 118,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 12,
                        "cooldownReduction": 0,
                        "health": 640,
                        "healthMax": 846,
                        "healthRegen": 52,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 43,
                        "movementSpeed": 345,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 500,
                        "powerRegen": 0,
                        "spellVamp": 0
                    },
                    "currentGold": 290,
                    "damageStats": {
                        "magicDamageDone": 295,
                        "magicDamageDoneToChampions": 75,
                        "magicDamageTaken": 229,
                        "physicalDamageDone": 1683,
                        "physicalDamageDoneToChampions": 139,
                        "physicalDamageTaken": 216,
                        "totalDamageDone": 1979,
                        "totalDamageDoneToChampions": 214,
                        "totalDamageTaken": 446,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 8,
                    "participantId": 1,
                    "position": {
                        "x": 1157,
                        "y": 10710
                    },
                    "timeEnemySpentControlled": 3698,
                    "totalGold": 790,
                    "xp": 676
                },
                "2": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 42,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 88,
                        "attackSpeed": 103,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 505,
                        "healthMax": 818,
                        "healthRegen": 105,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 35,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 386,
                        "powerMax": 386,
                        "powerRegen": 105,
                        "spellVamp": 0
                    },
                    "currentGold": 650,
                    "damageStats": {
                        "magicDamageDone": 14,
                        "magicDamageDoneToChampions": 14,
                        "magicDamageTaken": 493,
                        "physicalDamageDone": 9738,
                        "physicalDamageDoneToChampions": 232,
                        "physicalDamageTaken": 1565,
                        "totalDamageDone": 13602,
                        "totalDamageDoneToChampions": 257,
                        "totalDamageTaken": 2058,
                        "trueDamageDone": 3850,
                        "trueDamageDoneToChampions": 11,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 20,
                    "level": 3,
                    "minionsKilled": 0,
                    "participantId": 2,
                    "position": {
                        "x": 8532,
                        "y": 5181
                    },
                    "timeEnemySpentControlled": 2015,
                    "totalGold": 1500,
                    "xp": 1019
                },
                "3": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 9,
                        "armor": 24,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 62,
                        "attackSpeed": 112,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 180,
                        "healthMax": 703,
                        "healthRegen": 14,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 39,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 529,
                        "powerMax": 911,
                        "powerRegen": 18,
                        "spellVamp": 0
                    },
                    "currentGold": 363,
                    "damageStats": {
                        "magicDamageDone": 1959,
                        "magicDamageDoneToChampions": 353,
                        "magicDamageTaken": 327,
                        "physicalDamageDone": 1584,
                        "physicalDamageDoneToChampions": 46,
                        "physicalDamageTaken": 456,
                        "totalDamageDone": 3561,
                        "totalDamageDoneToChampions": 416,
                        "totalDamageTaken": 873,
                        "trueDamageDone": 16,
                        "trueDamageDoneToChampions": 16,
                        "trueDamageTaken": 90
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 12,
                    "participantId": 3,
                    "position": {
                        "x": 6670,
                        "y": 7070
                    },
                    "timeEnemySpentControlled": 32412,
                    "totalGold": 863,
                    "xp": 706
                },
                "4": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 33,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 67,
                        "attackSpeed": 111,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 539,
                        "healthMax": 673,
                        "healthRegen": 8,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 571,
                        "powerMax": 689,
                        "powerRegen": 18,
                        "spellVamp": 0
                    },
                    "currentGold": 417,
                    "damageStats": {
                        "magicDamageDone": 0,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 2771,
                        "physicalDamageDoneToChampions": 408,
                        "physicalDamageTaken": 191,
                        "totalDamageDone": 2771,
                        "totalDamageDoneToChampions": 408,
                        "totalDamageTaken": 191,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 2,
                    "minionsKilled": 13,
                    "participantId": 4,
                    "position": {
                        "x": 11976,
                        "y": 2567
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 917,
                    "xp": 497
                },
                "5": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 5,
                        "armor": 49,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 64,
                        "attackSpeed": 100,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 9,
                        "cooldownReduction": 0,
                        "health": 634,
                        "healthMax": 741,
                        "healthRegen": 24,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 37,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 256,
                        "powerMax": 295,
                        "powerRegen": 18,
                        "spellVamp": 0
                    },
                    "currentGold": 249,
                    "damageStats": {
                        "magicDamageDone": 85,
                        "magicDamageDoneToChampions": 85,
                        "magicDamageTaken": 100,
                        "physicalDamageDone": 410,
                        "physicalDamageDoneToChampions": 92,
                        "physicalDamageTaken": 146,
                        "totalDamageDone": 951,
                        "totalDamageDoneToChampions": 177,
                        "totalDamageTaken": 247,
                        "trueDamageDone": 455,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 20,
                    "jungleMinionsKilled": 0,
                    "level": 2,
                    "minionsKilled": 3,
                    "participantId": 5,
                    "position": {
                        "x": 12845,
                        "y": 2588
                    },
                    "timeEnemySpentControlled": 2280,
                    "totalGold": 749,
                    "xp": 497
                },
                "6": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 15,
                        "armor": 37,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 58,
                        "attackSpeed": 117,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 632,
                        "healthMax": 851,
                        "healthRegen": 12,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 31,
                        "movementSpeed": 333,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 370,
                        "powerMax": 370,
                        "powerRegen": 20,
                        "spellVamp": 0
                    },
                    "currentGold": 448,
                    "damageStats": {
                        "magicDamageDone": 700,
                        "magicDamageDoneToChampions": 229,
                        "magicDamageTaken": 75,
                        "physicalDamageDone": 1346,
                        "physicalDamageDoneToChampions": 216,
                        "physicalDamageTaken": 287,
                        "totalDamageDone": 2047,
                        "totalDamageDoneToChampions": 446,
                        "totalDamageTaken": 362,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 14,
                    "participantId": 6,
                    "position": {
                        "x": 1637,
                        "y": 11648
                    },
                    "timeEnemySpentControlled": 2015,
                    "totalGold": 948,
                    "xp": 833
                },
                "7": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 55,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 76,
                        "attackSpeed": 118,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 293,
                        "healthMax": 825,
                        "healthRegen": 27,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 40,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 100,
                        "powerRegen": 0,
                        "spellVamp": 0
                    },
                    "currentGold": 522,
                    "damageStats": {
                        "magicDamageDone": 5240,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 3773,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 1871,
                        "totalDamageDone": 12893,
                        "totalDamageDoneToChampions": 0,
                        "totalDamageTaken": 1871,
                        "trueDamageDone": 3879,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 16,
                    "level": 3,
                    "minionsKilled": 0,
                    "participantId": 7,
                    "position": {
                        "x": 11461,
                        "y": 6745
                    },
                    "timeEnemySpentControlled": 37534,
                    "totalGold": 1022,
                    "xp": 853
                },
                "8": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 24,
                        "armor": 33,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 62,
                        "attackSpeed": 113,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 244,
                        "healthMax": 856,
                        "healthRegen": 14,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 31,
                        "movementSpeed": 345,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 445,
                        "powerMax": 461,
                        "powerRegen": 17,
                        "spellVamp": 0
                    },
                    "currentGold": 348,
                    "damageStats": {
                        "magicDamageDone": 679,
                        "magicDamageDoneToChampions": 327,
                        "magicDamageTaken": 353,
                        "physicalDamageDone": 1725,
                        "physicalDamageDoneToChampions": 446,
                        "physicalDamageTaken": 640,
                        "totalDamageDone": 2494,
                        "totalDamageDoneToChampions": 863,
                        "totalDamageTaken": 1010,
                        "trueDamageDone": 90,
                        "trueDamageDoneToChampions": 90,
                        "trueDamageTaken": 16
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 12,
                    "participantId": 8,
                    "position": {
                        "x": 8221,
                        "y": 7926
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 848,
                    "xp": 682
                },
                "9": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 35,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 77,
                        "attackSpeed": 115,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 782,
                        "healthMax": 782,
                        "healthRegen": 8,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 325,
                        "omnivamp": 2,
                        "physicalVamp": 0,
                        "power": 187,
                        "powerMax": 296,
                        "powerRegen": 28,
                        "spellVamp": 0
                    },
                    "currentGold": 427,
                    "damageStats": {
                        "magicDamageDone": 23,
                        "magicDamageDoneToChampions": 23,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 3956,
                        "physicalDamageDoneToChampions": 239,
                        "physicalDamageTaken": 129,
                        "totalDamageDone": 3979,
                        "totalDamageDoneToChampions": 262,
                        "totalDamageTaken": 129,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 2,
                    "minionsKilled": 14,
                    "participantId": 9,
                    "position": {
                        "x": 12818,
                        "y": 2840
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 927,
                    "xp": 557
                },
                "10": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 17,
                        "armor": 37,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 50,
                        "attackSpeed": 102,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 555,
                        "healthMax": 633,
                        "healthRegen": 10,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 30,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 294,
                        "powerMax": 420,
                        "powerRegen": 29,
                        "spellVamp": 0
                    },
                    "currentGold": 218,
                    "damageStats": {
                        "magicDamageDone": 919,
                        "magicDamageDoneToChampions": 77,
                        "magicDamageTaken": 99,
                        "physicalDamageDone": 33,
                        "physicalDamageDoneToChampions": 33,
                        "physicalDamageTaken": 604,
                        "totalDamageDone": 953,
                        "totalDamageDoneToChampions": 111,
                        "totalDamageTaken": 715,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 11
                    },
                    "goldPerSecond": 20,
                    "jungleMinionsKilled": 0,
                    "level": 2,
                    "minionsKilled": 1,
                    "participantId": 10,
                    "position": {
                        "x": 13367,
                        "y": 2641
                    },
                    "timeEnemySpentControlled": 20477,
                    "totalGold": 718,
                    "xp": 527
                }
            },
            "timestamp": 180029
        },
        {
            "events": [
                {
                    "creatorId": 3,
                    "timestamp": 181507,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "itemId": 2003,
                    "participantId": 5,
                    "timestamp": 182135,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2010,
                    "participantId": 5,
                    "timestamp": 182366,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2403,
                    "participantId": 8,
                    "timestamp": 182531,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2003,
                    "participantId": 9,
                    "timestamp": 184117,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2003,
                    "participantId": 5,
                    "timestamp": 186859,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2010,
                    "participantId": 4,
                    "timestamp": 187322,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "assistingParticipantIds": [
                        2
                    ],
                    "bounty": 300,
                    "killStreakLength": 0,
                    "killerId": 3,
                    "position": {
                        "x": 8211,
                        "y": 8225
                    },
                    "shutdownBounty": 0,
                    "timestamp": 189911,
                    "type": "CHAMPION_KILL",
                    "victimDamageDealt": [
                        {
                            "basic": false,
                            "magicDamage": 21,
                            "name": "Zoe",
                            "participantId": 2,
                            "physicalDamage": 0,
                            "spellName": "zoepassive",
                            "spellSlot": 63,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "Zoe",
                            "participantId": 2,
                            "physicalDamage": 44,
                            "spellName": "zoepassive",
                            "spellSlot": 63,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 59,
                            "name": "Zoe",
                            "participantId": 2,
                            "physicalDamage": 0,
                            "spellName": "zoee",
                            "spellSlot": 2,
                            "trueDamage": 0,
                            "type": "OTHER"
                        }
                    ],
                    "victimDamageReceived": [
                        {
                            "basic": false,
                            "magicDamage": 70,
                            "name": "Taliyah",
                            "participantId": 3,
                            "physicalDamage": 0,
                            "spellName": "taliyahe",
                            "spellSlot": 2,
                            "trueDamage": 6,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 0,
                            "name": "Khazix",
                            "participantId": 2,
                            "physicalDamage": 54,
                            "spellName": "khazixe",
                            "spellSlot": 2,
                            "trueDamage": 18,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 0,
                            "name": "Khazix",
                            "participantId": 2,
                            "physicalDamage": 65,
                            "spellName": "khazixq",
                            "spellSlot": 0,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 0,
                            "name": "Khazix",
                            "participantId": 2,
                            "physicalDamage": 82,
                            "spellName": "khazixw",
                            "spellSlot": 1,
                            "trueDamage": 0,
                            "type": "OTHER"
                        }
                    ],
                    "victimId": 8
                },
                {
                    "level": 4,
                    "participantId": 2,
                    "timestamp": 191926,
                    "type": "LEVEL_UP"
                },
                {
                    "bounty": 300,
                    "killStreakLength": 0,
                    "killerId": 8,
                    "position": {
                        "x": 7901,
                        "y": 8055
                    },
                    "shutdownBounty": 0,
                    "timestamp": 192124,
                    "type": "CHAMPION_KILL",
                    "victimDamageReceived": [
                        {
                            "basic": false,
                            "magicDamage": 21,
                            "name": "Zoe",
                            "participantId": 8,
                            "physicalDamage": 0,
                            "spellName": "zoepassive",
                            "spellSlot": 63,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "Zoe",
                            "participantId": 8,
                            "physicalDamage": 44,
                            "spellName": "zoepassive",
                            "spellSlot": 63,
                            "trueDamage": 0,
                            "type": "OTHER"
                        },
                        {
                            "basic": false,
                            "magicDamage": 59,
                            "name": "Zoe",
                            "participantId": 8,
                            "physicalDamage": 0,
                            "spellName": "zoee",
                            "spellSlot": 2,
                            "trueDamage": 80,
                            "type": "OTHER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "Turret",
                            "participantId": 0,
                            "physicalDamage": 706,
                            "spellName": "turretbasicattack",
                            "spellSlot": 64,
                            "trueDamage": 0,
                            "type": "TOWER"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "SRU_ChaosMinionRanged",
                            "participantId": 0,
                            "physicalDamage": 27,
                            "spellName": "sru_chaosminionrangedbasicattack2",
                            "spellSlot": 65,
                            "trueDamage": 0,
                            "type": "MINION"
                        },
                        {
                            "basic": true,
                            "magicDamage": 0,
                            "name": "SRU_ChaosMinionRanged",
                            "participantId": 0,
                            "physicalDamage": 27,
                            "spellName": "sru_chaosminionrangedbasicattack",
                            "spellSlot": 64,
                            "trueDamage": 0,
                            "type": "MINION"
                        }
                    ],
                    "victimId": 2
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 2,
                    "skillSlot": 1,
                    "timestamp": 193742,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "itemId": 2003,
                    "participantId": 4,
                    "timestamp": 198204,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 1052,
                    "participantId": 8,
                    "timestamp": 198600,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1036,
                    "participantId": 2,
                    "timestamp": 200848,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 3134,
                    "participantId": 2,
                    "timestamp": 200848,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2003,
                    "participantId": 6,
                    "timestamp": 201079,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2055,
                    "participantId": 8,
                    "timestamp": 202103,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "level": 4,
                    "participantId": 7,
                    "timestamp": 202963,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 9,
                    "timestamp": 203062,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 4,
                    "participantId": 6,
                    "timestamp": 203921,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 9,
                    "skillSlot": 3,
                    "timestamp": 204449,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 7,
                    "skillSlot": 3,
                    "timestamp": 204681,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 6,
                    "skillSlot": 2,
                    "timestamp": 206035,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 10,
                    "timestamp": 207058,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 10,
                    "skillSlot": 3,
                    "timestamp": 209176,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "creatorId": 10,
                    "timestamp": 211554,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "level": 4,
                    "participantId": 1,
                    "timestamp": 214691,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 4,
                    "timestamp": 216507,
                    "type": "LEVEL_UP"
                },
                {
                    "level": 3,
                    "participantId": 5,
                    "timestamp": 216507,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 5,
                    "skillSlot": 2,
                    "timestamp": 218027,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 4,
                    "skillSlot": 2,
                    "timestamp": 218324,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "level": 4,
                    "participantId": 3,
                    "timestamp": 220636,
                    "type": "LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 3,
                    "skillSlot": 1,
                    "timestamp": 222255,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "levelUpType": "NORMAL",
                    "participantId": 1,
                    "skillSlot": 1,
                    "timestamp": 222321,
                    "type": "SKILL_LEVEL_UP"
                },
                {
                    "itemId": 2003,
                    "participantId": 1,
                    "timestamp": 224633,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "creatorId": 1,
                    "timestamp": 228201,
                    "type": "WARD_PLACED",
                    "wardType": "YELLOW_TRINKET"
                },
                {
                    "itemId": 2003,
                    "participantId": 6,
                    "timestamp": 230217,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 2055,
                    "participantId": 8,
                    "timestamp": 232726,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "creatorId": 8,
                    "timestamp": 232726,
                    "type": "WARD_PLACED",
                    "wardType": "CONTROL_WARD"
                },
                {
                    "itemId": 2003,
                    "participantId": 4,
                    "timestamp": 233487,
                    "type": "ITEM_DESTROYED"
                },
                {
                    "itemId": 1042,
                    "participantId": 7,
                    "timestamp": 234182,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1042,
                    "participantId": 7,
                    "timestamp": 234380,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 2055,
                    "participantId": 7,
                    "timestamp": 234974,
                    "type": "ITEM_PURCHASED"
                },
                {
                    "itemId": 1026,
                    "participantId": 3,
                    "timestamp": 236396,
                    "type": "ITEM_PURCHASED"
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
                        "attackDamage": 69,
                        "attackSpeed": 120,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 11,
                        "cooldownReduction": 0,
                        "health": 712,
                        "healthMax": 924,
                        "healthRegen": 48,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 44,
                        "movementSpeed": 345,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 500,
                        "powerRegen": 0,
                        "spellVamp": 0
                    },
                    "currentGold": 606,
                    "damageStats": {
                        "magicDamageDone": 760,
                        "magicDamageDoneToChampions": 157,
                        "magicDamageTaken": 529,
                        "physicalDamageDone": 3811,
                        "physicalDamageDoneToChampions": 347,
                        "physicalDamageTaken": 340,
                        "totalDamageDone": 4625,
                        "totalDamageDoneToChampions": 557,
                        "totalDamageTaken": 870,
                        "trueDamageDone": 53,
                        "trueDamageDoneToChampions": 53,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 4,
                    "minionsKilled": 16,
                    "participantId": 1,
                    "position": {
                        "x": 1720,
                        "y": 12017
                    },
                    "timeEnemySpentControlled": 9785,
                    "totalGold": 1106,
                    "xp": 1386
                },
                "2": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 45,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 110,
                        "attackSpeed": 106,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 828,
                        "healthMax": 904,
                        "healthRegen": 18,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 36,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 338,
                        "powerMax": 417,
                        "powerRegen": 42,
                        "spellVamp": 0
                    },
                    "currentGold": 312,
                    "damageStats": {
                        "magicDamageDone": 14,
                        "magicDamageDoneToChampions": 14,
                        "magicDamageTaken": 574,
                        "physicalDamageDone": 12919,
                        "physicalDamageDoneToChampions": 435,
                        "physicalDamageTaken": 2800,
                        "totalDamageDone": 17395,
                        "totalDamageDoneToChampions": 478,
                        "totalDamageTaken": 3455,
                        "trueDamageDone": 4462,
                        "trueDamageDoneToChampions": 29,
                        "trueDamageTaken": 80
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 24,
                    "level": 4,
                    "minionsKilled": 0,
                    "participantId": 2,
                    "position": {
                        "x": 9731,
                        "y": 2604
                    },
                    "timeEnemySpentControlled": 2015,
                    "totalGold": 1912,
                    "xp": 1351
                },
                "3": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 49,
                        "armor": 28,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 65,
                        "attackSpeed": 113,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 610,
                        "healthMax": 785,
                        "healthRegen": 15,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 40,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 680,
                        "powerMax": 989,
                        "powerRegen": 19,
                        "spellVamp": 0
                    },
                    "currentGold": 70,
                    "damageStats": {
                        "magicDamageDone": 4214,
                        "magicDamageDoneToChampions": 424,
                        "magicDamageTaken": 327,
                        "physicalDamageDone": 2195,
                        "physicalDamageDoneToChampions": 46,
                        "physicalDamageTaken": 513,
                        "totalDamageDone": 6432,
                        "totalDamageDoneToChampions": 493,
                        "totalDamageTaken": 930,
                        "trueDamageDone": 23,
                        "trueDamageDoneToChampions": 23,
                        "trueDamageTaken": 90
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 4,
                    "minionsKilled": 20,
                    "participantId": 3,
                    "position": {
                        "x": 1130,
                        "y": 911
                    },
                    "timeEnemySpentControlled": 81054,
                    "totalGold": 1420,
                    "xp": 1199
                },
                "4": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 36,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 69,
                        "attackSpeed": 143,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 510,
                        "healthMax": 750,
                        "healthRegen": 89,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 31,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 572,
                        "powerMax": 821,
                        "powerRegen": 19,
                        "spellVamp": 0
                    },
                    "currentGold": 726,
                    "damageStats": {
                        "magicDamageDone": 0,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 309,
                        "physicalDamageDone": 4741,
                        "physicalDamageDoneToChampions": 855,
                        "physicalDamageTaken": 328,
                        "totalDamageDone": 4741,
                        "totalDamageDoneToChampions": 855,
                        "totalDamageTaken": 637,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 21,
                    "participantId": 4,
                    "position": {
                        "x": 10350,
                        "y": 1188
                    },
                    "timeEnemySpentControlled": 0,
                    "totalGold": 1226,
                    "xp": 836
                },
                "5": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 5,
                        "armor": 52,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 67,
                        "attackSpeed": 101,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 10,
                        "cooldownReduction": 0,
                        "health": 678,
                        "healthMax": 823,
                        "healthRegen": 25,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 39,
                        "movementSpeed": 325,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 341,
                        "powerMax": 366,
                        "powerRegen": 19,
                        "spellVamp": 0
                    },
                    "currentGold": 465,
                    "damageStats": {
                        "magicDamageDone": 85,
                        "magicDamageDoneToChampions": 85,
                        "magicDamageTaken": 152,
                        "physicalDamageDone": 769,
                        "physicalDamageDoneToChampions": 186,
                        "physicalDamageTaken": 628,
                        "totalDamageDone": 1902,
                        "totalDamageDoneToChampions": 271,
                        "totalDamageTaken": 780,
                        "trueDamageDone": 1047,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 20,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 5,
                    "participantId": 5,
                    "position": {
                        "x": 10229,
                        "y": 1584
                    },
                    "timeEnemySpentControlled": 20698,
                    "totalGold": 965,
                    "xp": 836
                },
                "6": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 15,
                        "armor": 41,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 60,
                        "attackSpeed": 120,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 629,
                        "healthMax": 940,
                        "healthRegen": 93,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 32,
                        "movementSpeed": 368,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 337,
                        "powerMax": 390,
                        "powerRegen": 21,
                        "spellVamp": 0
                    },
                    "currentGold": 725,
                    "damageStats": {
                        "magicDamageDone": 1352,
                        "magicDamageDoneToChampions": 529,
                        "magicDamageTaken": 157,
                        "physicalDamageDone": 2091,
                        "physicalDamageDoneToChampions": 261,
                        "physicalDamageTaken": 592,
                        "totalDamageDone": 3443,
                        "totalDamageDoneToChampions": 791,
                        "totalDamageTaken": 803,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 53
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 4,
                    "minionsKilled": 23,
                    "participantId": 6,
                    "position": {
                        "x": 2169,
                        "y": 12992
                    },
                    "timeEnemySpentControlled": 5219,
                    "totalGold": 1225,
                    "xp": 1262
                },
                "7": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 59,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 79,
                        "attackSpeed": 144,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 911,
                        "healthMax": 911,
                        "healthRegen": 20,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 41,
                        "movementSpeed": 350,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 0,
                        "powerMax": 100,
                        "powerRegen": 0,
                        "spellVamp": 0
                    },
                    "currentGold": 226,
                    "damageStats": {
                        "magicDamageDone": 6581,
                        "magicDamageDoneToChampions": 0,
                        "magicDamageTaken": 353,
                        "physicalDamageDone": 5793,
                        "physicalDamageDoneToChampions": 0,
                        "physicalDamageTaken": 2077,
                        "totalDamageDone": 17016,
                        "totalDamageDoneToChampions": 0,
                        "totalDamageTaken": 2431,
                        "trueDamageDone": 4641,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 28,
                    "level": 4,
                    "minionsKilled": 0,
                    "participantId": 7,
                    "position": {
                        "x": 11897,
                        "y": 13399
                    },
                    "timeEnemySpentControlled": 75894,
                    "totalGold": 1401,
                    "xp": 1332
                },
                "8": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 46,
                        "armor": 33,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 62,
                        "attackSpeed": 113,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 832,
                        "healthMax": 856,
                        "healthRegen": 14,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 31,
                        "movementSpeed": 353,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 359,
                        "powerMax": 461,
                        "powerRegen": 17,
                        "spellVamp": 0
                    },
                    "currentGold": 379,
                    "damageStats": {
                        "magicDamageDone": 1118,
                        "magicDamageDoneToChampions": 408,
                        "magicDamageTaken": 424,
                        "physicalDamageDone": 2109,
                        "physicalDamageDoneToChampions": 490,
                        "physicalDamageTaken": 891,
                        "totalDamageDone": 3523,
                        "totalDamageDoneToChampions": 1069,
                        "totalDamageTaken": 1356,
                        "trueDamageDone": 295,
                        "trueDamageDoneToChampions": 170,
                        "trueDamageTaken": 41
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 17,
                    "participantId": 8,
                    "position": {
                        "x": 7825,
                        "y": 7690
                    },
                    "timeEnemySpentControlled": 4129,
                    "totalGold": 1389,
                    "xp": 1135
                },
                "9": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 0,
                        "armor": 38,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 81,
                        "attackSpeed": 134,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 651,
                        "healthMax": 857,
                        "healthRegen": 8,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 31,
                        "movementSpeed": 325,
                        "omnivamp": 2,
                        "physicalVamp": 0,
                        "power": 159,
                        "powerMax": 333,
                        "powerRegen": 16,
                        "spellVamp": 0
                    },
                    "currentGold": 718,
                    "damageStats": {
                        "magicDamageDone": 55,
                        "magicDamageDoneToChampions": 55,
                        "magicDamageTaken": 0,
                        "physicalDamageDone": 6551,
                        "physicalDamageDoneToChampions": 653,
                        "physicalDamageTaken": 579,
                        "totalDamageDone": 6607,
                        "totalDamageDoneToChampions": 708,
                        "totalDamageTaken": 579,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 0
                    },
                    "goldPerSecond": 0,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 24,
                    "participantId": 9,
                    "position": {
                        "x": 13464,
                        "y": 2569
                    },
                    "timeEnemySpentControlled": 1882,
                    "totalGold": 1218,
                    "xp": 913
                },
                "10": {
                    "championStats": {
                        "abilityHaste": 0,
                        "abilityPower": 17,
                        "armor": 41,
                        "armorPen": 0,
                        "armorPenPercent": 0,
                        "attackDamage": 52,
                        "attackSpeed": 104,
                        "bonusArmorPenPercent": 0,
                        "bonusMagicPenPercent": 0,
                        "ccReduction": 0,
                        "cooldownReduction": 0,
                        "health": 526,
                        "healthMax": 699,
                        "healthRegen": 11,
                        "lifesteal": 0,
                        "magicPen": 0,
                        "magicPenPercent": 0,
                        "magicResist": 31,
                        "movementSpeed": 330,
                        "omnivamp": 0,
                        "physicalVamp": 0,
                        "power": 306,
                        "powerMax": 503,
                        "powerRegen": 30,
                        "spellVamp": 0
                    },
                    "currentGold": 433,
                    "damageStats": {
                        "magicDamageDone": 1248,
                        "magicDamageDoneToChampions": 406,
                        "magicDamageTaken": 99,
                        "physicalDamageDone": 168,
                        "physicalDamageDoneToChampions": 168,
                        "physicalDamageTaken": 767,
                        "totalDamageDone": 1417,
                        "totalDamageDoneToChampions": 574,
                        "totalDamageTaken": 877,
                        "trueDamageDone": 0,
                        "trueDamageDoneToChampions": 0,
                        "trueDamageTaken": 11
                    },
                    "goldPerSecond": 20,
                    "jungleMinionsKilled": 0,
                    "level": 3,
                    "minionsKilled": 1,
                    "participantId": 10,
                    "position": {
                        "x": 13284,
                        "y": 2538
                    },
                    "timeEnemySpentControlled": 31477,
                    "totalGold": 933,
                    "xp": 883
                }
            },
            "timestamp": 240030
        }
]

let test = new TimeLine(frames)

export { test }