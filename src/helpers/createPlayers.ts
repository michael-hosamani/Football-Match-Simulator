import type { playerRole } from "../lib/enums.js";
import { Player } from "../classes/player.js";
import type { Team } from "../classes/team.js";
import { TEAM_SIZE } from "../lib/constants.js";

// this function creates a single player
export function createPlayer(team: Team, name: string, jerseyNumber: number, role: playerRole): Player{
    if(team.players.find(p => p.jerseyNumber === jerseyNumber)){
        console.log("this jersey number is already taken, so please select a different jersey number")
        throw new Error()
    }
    const newPlayer = new Player(name, jerseyNumber, role);
    return newPlayer;
}

// create multiple players
export function createPlayers(team: Team, names: string[], jerseyNumbers: number[], roles: playerRole[], teamSize: number = TEAM_SIZE){
    let players: Player[] = [];
    for(let i = 0; i < teamSize; i++){
        const newPlayer = createPlayer(team, names[i]!, jerseyNumbers[i]!, roles[i]!)
        players.push(newPlayer)
    }

    return players
}