import type { Commentary } from "../classes/commentary.js";
import { playerActions } from "../classes/enums.js";
import { GoalKeeper, type Player } from "../classes/player.js";
import type { Team } from "../classes/team.js";

// this function is used to handle actions if a goal is saved
export function manageGoalSaved(team: Team, player: Player, commentary: Commentary, goalKeeper: Player){
    commentary.genericComment(`${player.playerName} was unable to score the goal`);
    player.performAction(playerActions.Run)
    if(goalKeeper instanceof GoalKeeper)(
        goalKeeper.saveGoal()
    )
    commentary.commentOnGoalSave(team, goalKeeper)
}