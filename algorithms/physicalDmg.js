class Char {
    constructor(name, stats, abilities, items) {
        this.name = name;
        this.stats = stats;
        this.abilities = abilities;
        this.items = items;
    }
}

class Stats {
    constructor()
}

let dmgTaken = (resist, damage) => {
    let dmgMult = 100 / (100 + resist)
    return damage * dmgMult
}



let timeToKill = (aS, dmg, health) => {
    let seconds = 0;
    let hitTime = 1 / aS
    while(health > 0) {
        let dps = dmgTaken(20, dmg) / hitTime;
        let dpt = dps/10
        health -= dpt;
        seconds += 0.1;
    }

    return seconds;
}


console.log(`You have killed red buff in ${timeToKill(0.724, 71, 2300)} seconds`)
