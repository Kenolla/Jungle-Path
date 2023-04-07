import { APIKey } from "./APIkey.js";

async function getTimeLine(summoner, numberOfGames, APIKey) {
    if(numberOfGames > 90) return null;
    let res = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${APIKey}`)
    let newSummoner = await res.json()
    let puuid = newSummoner.puuid

    
    return newSummoner
 }