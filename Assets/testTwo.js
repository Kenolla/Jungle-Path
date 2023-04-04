class Character {
    constructor(health, healthReg, armor, magicResist, moveSpeed, attkdmg, baseAS) {
        this.health = health;
        this.healthReg = healthReg;
        this.armor = armor;
        this.magicResist = magicResist;
        this.moveSpeed = moveSpeed;
        this.attkdmg = attkdmg;
        this.baseAS = baseAS;
    }

    dmgPerTick() {
        let dps = this.attkdmg * this.baseAS
        return dps / 1000;
    }

    qDmgPerTick() {
        let cd = 8;
        let relative = 8 - ((cd / (1 / this.baseAS))/2) - 1
        let dps = (this.attkdmg * 0.2) * 1/relative;
        return dps / 1000;
    }
}

let dmgTaken = (resist, damage) => {
    let dmgMult = 100 / (100 + resist)
    return damage * dmgMult
}

const shyvana = new Character(665, 8.5, 38, 32, 350, 71, 0.72);
let redBuff = 2300;
let seconds = 0;
while(redBuff > 0) {
    redBuff -= dmgTaken(20, shyvana.dmgPerTick());
    redBuff -= dmgTaken(20, shyvana.qDmgPerTick() * 2)
    seconds++;
}


console.log(`You've killed red buff in ${seconds / 1000} ticks`)