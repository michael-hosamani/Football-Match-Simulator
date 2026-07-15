import { playerActions, playerRole } from "./classes/enums.js"
import { Match } from "./classes/match.js"
import { Defender, GoalKeeper, Midfielder, Striker, type Player } from "./classes/player.js"
import { Team } from "./classes/team.js"
import { roles, team1JerseyNumbers, team1PlayerNames, team2JerseyNumbers, team2PlayerNames } from "./constants/teamInfo.js";
import { createPlayers } from "./helpers/createPlayers.js";
// import { team1, team1Players, team2, team2Players } from "./constants/teamInfo.js";
import { findPlayer } from './helpers/findPlayer.js';

function main(){
    const team1 = new Team("team 1", []);
    const team1Players: Player[] = createPlayers(team1, team1PlayerNames, team1JerseyNumbers, roles)
    team1.setTeam(team1Players)

    const team2 = new Team("team 2", []);
    const team2Players: Player[] = createPlayers(team2, team2PlayerNames, team2JerseyNumbers, roles)
    team2.setTeam(team2Players)
    console.log("team size: ", team1.players.length)
    const newMatch = new Match(team1, team2);
    const currStriker = findPlayer(team1, team1.players[0]!)
    if(!currStriker){
        return;
    }

    const currDefender = findPlayer(team1, team1.players[3]!)
    if(!currDefender){
        return;
    }

    const currGoalKeeper = findPlayer(team1, team1.players[4]!)
    if(!currGoalKeeper){
        return;
    }

    const currMidfielder = findPlayer(team1, team1.players[2]!)
    if(!currMidfielder){
        return;
    }

    console.log("Initial Score")
    newMatch.displayScore();
    console.log("\n")

    newMatch.passTheBall(team1.players[2]!, team1.players[0]!)
    console.log("\n")

    if(currMidfielder instanceof Midfielder){
        currMidfielder.longPass()
        console.log("\n")
    }
    
    newMatch.scoreGoal(team1, team1.players[0]!, team2.players[4]!);
    console.log("\n")
    
    if(currStriker instanceof Striker){
        currStriker.shoot()
        console.log("\n")
    }
    
    newMatch.passTheBall(team2.players[4]!, team1.players[3]!)
    console.log("\n")

    if(currDefender instanceof Defender){
        currDefender.tackle()
        console.log("\n")
    }
    
    newMatch.scoreGoal(team2, team2.players[0]!, team1.players[4]!);
    console.log("\n")

    
    newMatch.scoreGoal(team1, team1.players[0]!, team2.players[4]!);
    console.log("\n")

    console.log("Game over \n");
    newMatch.displayResult();
}
main()