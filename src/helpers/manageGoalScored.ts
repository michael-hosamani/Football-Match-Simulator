import { Team } from '../classes/team.js';
import { Player } from '../classes/player.js';
import type { Commentary } from '../classes/commentary.js';
import { playerActions } from '../classes/enums.js';

// this function is used to handle actions if a goal is scored
export function manageGoalScored(team: Team, player: Player, commentary: Commentary){
    team.goals++;
                
    player.incrementGoal();
    
    commentary.commentOnGoal(team, player);
    
    player.performAction(playerActions.Celebrate)
}