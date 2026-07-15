import type { Player } from "../classes/player.js";
import type { Team } from "../classes/team.js";

// this function is used find a player in a team
export function findPlayer(team: Team, player: Player): Player | null{
    try {
        const findPlayer = team.players.find(p => p === player)

        if(!findPlayer){
            throw new Error("Player not found")
        }

        return findPlayer;   
    } catch (error) {
        console.error("Error while finding a player: ", error)
        return null;
    }
}