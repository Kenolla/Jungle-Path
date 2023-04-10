 import { APIKey } from "../Algorithms/APIkey.js"
 import { getTimeLine } from "../Algorithms/CreateMatchTimeLines.js"
 
 class TimeLine {
    constructor(frames, side) {
        this.frames = frames,
        this.side = side
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

//add modularity here
const game = await getTimeLine('ARMAO', 1, APIKey)
const frames = game[0] !== null ? game[0].frames : null;

let test = new TimeLine(frames, game[0].side)

export { test }