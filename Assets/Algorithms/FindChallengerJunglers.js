import { APIKey } from "../APIkey.js";
import { data } from "./testChallengers.js"

async function getJunglers(APIKey, knownJunglers = []) {
    const junglers = knownJunglers //list of junglers by summoner name
    const summonerList = await getChallSummoners(APIKey)
    let limit = 1
    for(const summoner of summonerList) {
        await delay(700);
        if (limit > 10) break;
        if(junglers.includes(summoner.summonerName)) continue;
        if(await isJungler(summoner, APIKey)) {
            junglers.push(summoner.summonerName)
        };
        limit++;
    }

    return junglers
}

async function getChallSummoners(APIKey) {
    return data.entries
}

async function isJungler(summoner, APIKey) {
    console.log(`checking summoner: ${summoner.summonerName}`)
    let jungleGames = 0;
    let nonJungleGames = 0;
    const name = summoner.summonerName;

    console.log('fetching puuid')
    let res = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${APIKey}`)
    const summonerStats = await res.json()
    const puuid = summonerStats.puuid
    console.log(`puuid: ${puuid}`)

    await delay(700);
    console.log('fetching matches')
    res = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${APIKey}`)
    const matches = await res.json()
    console.log('got matches')

    for(const match of matches) {
        try{  
        await delay(700);
        res = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${APIKey}`)
        const stats = await res.json()

        process.stdout.write('-')
        if(!stats.info.gameMode || stats.info.gameMode !== 'CLASSIC' || stats.info.mapId !== 11) continue;
        for(const participant of stats.info.participants) {
            if(participant.puuid === puuid) {
                if(participant.lane === "JUNGLE") {
                    jungleGames++
                } else {
                    nonJungleGames++
                }
            }
        }
        } catch {
            continue
        }
    }
    console.log()
    
    return jungleGames / (jungleGames + nonJungleGames) > 0.5
}

function delay(ms) {
    return new Promise(res => setTimeout(res, ms))
}

let stats = await getJunglers(APIKey);

console.log(stats)
