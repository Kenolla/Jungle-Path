import { APIKey } from "./APIkey.js";

async function getTimeLine(summoner, numberOfGames, APIKey) {
    if(numberOfGames > 40) return null;
    const timeLinesofSummoner = []

    let res = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${APIKey}`)
    const newSummoner = await res.json()
    const puuid = newSummoner.puuid

    res = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${numberOfGames}&api_key=${APIKey}`)
    const matchIds = await res.json();

    for(let matchId of matchIds) {
        const matchData = {}
        res = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${APIKey}`)
        const gameData = await res.json();

        let pos = 0
        for(let summoner of gameData.info.participants) {
            pos++;
            if(summoner.puuid === puuid) {
                if(summoner.individualPosition !== 'JUNGLE') {
                    matchData.champion = null;
                    break;
                }
                matchData.side = pos < 5 ? 2 : 7;
                matchData.champion = summoner.championName
                matchData.championId = summoner.championId
                break;
            }
        }

        if(matchData.champion === null) {
            timeLinesofSummoner.push(null);
            continue;
        }

        res = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}/timeline?api_key=${APIKey}`)
        const timeLine = await res.json()
        const frames = timeLine.info.frames;
        matchData.frames = [frames[0], frames[1], frames[2], frames[3], frames[4]];
        timeLinesofSummoner.push(matchData);
    }
    
    return timeLinesofSummoner
}

export { getTimeLine }