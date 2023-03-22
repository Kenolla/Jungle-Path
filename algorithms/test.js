let ticks = 0;

class Character {
    constructor(health, healthReg, armor, magicResist, moveSpeed, attkdmg, baseAS, attackWind) {
        this.health = health;
        this.healthReg = healthReg;
        this.armor = armor;
        this.magicResist = magicResist;
        this.moveSpeed = moveSpeed;
        this.attkdmg = attkdmg;
        this.baseAS = baseAS;
        this.attackWind = attackWind;
        this.autoCoolDown = false;
        this.autoDisabled = false;
        this.qCoolDown = false;
        this.qDisabled = false;
    }

    isDisabled() {
        return this.autoDisabled || this.qDisabled;
    }
}

const autoAttk = (currentTick, char, target) => {
    if(!char.autoCoolDown && !char.isDisabled()) {
        char.autoCoolDown = true;
        char.autoDisabled = true;
        let attackEventTick = Math.round((1000 / char.baseAS) * char.attackWind)
        let attackEndTick = Math.round(1000 / char.baseAS)
        let eventTick = attackEventTick + currentTick;
        let endTick = attackEndTick + currentTick;
        return [{tick: eventTick, event: () => autoEvent(char, target)}, {tick: endTick, event: () => autoAgain(char)}]
    }
}

const autoEvent = (char, target) => {
    char.autoDisabled = false;
    let dmg = dmgTaken(target.resist, char.attkdmg);
    target.health -= dmg;
    return target.health;
}

const autoAgain = (char) => {
    char.autoCoolDown = false;
}

const qAttk = (currentTick, char, target) => {
    if(!char.qCoolDown && !char.isDisabled()) {
        char.qCoolDown = true;
        char.qDisabled = false;
        
    }
}

const dmgTaken = (resist, damage) => {
    let dmgMult = 100 / (100 + resist)
    return damage * dmgMult
}




const shyvana = new Character(665, 8.5, 38, 32, 350, 66, 0.658, 0.19737);

let redBuff = {
    resist: 20,
    health: 2300
}

while(redBuff.health > 0) {
    que = [];
    //pickAbility
    let events = autoAttk(ticks, shyvana, redBuff);
    for(const event of events) {
        que.push(event)
    }
    que.sort((a, b) => a.tick - b.tick)
    let event = que.shift()
    ticks = event.tick;
    event.event()
    
    break;
}





