import type { Player } from "./player.js";
import type { Team } from "./team.js";

export class Commentary{

    // commentary on a goal scored
    commentOnGoal(team: Team, player: Player){
        console.log(`${player.playerName} from ${team.teamName} has scored an incredible goal!!!`)
    }

    // commentary on the ball being passed
    commentOnPass(playerA: Player, playerB: Player){
         console.log(`${playerA.playerName} has passed the ball to ${playerB.playerName}`)
    }


    // commentary on a goal being saved
    commentOnGoalSave(team: Team, player: Player){   
        console.log(`Its unbelievable, ${player.playerName} from ${team.teamName} has saved the goal!!!`)
    }

    // funciton used to make a generic commentary
    genericComment(message: string){
        console.log(message);
    }
}