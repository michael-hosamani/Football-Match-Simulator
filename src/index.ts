import { playerActions, playerRole } from "./classes/enums.js"
import { Match } from "./classes/match.js"
import { Defender, GoalKeeper, Midfielder, Striker, type Player } from "./classes/player.js"
import { Team } from "./classes/team.js"
import { team1Players, team2Players } from "./constants/teamInfo.js";

function main(){
    const team1 = new Team("team 1", team1Players);
    const team2 = new Team("team 2", team2Players);
    const newMatch = new Match(team1, team2);

    console.log("Initial Score")
    newMatch.getScore();
    console.log("\n")

    newMatch.passTheBall(team1.players[2]!, team1.players[0]!)
    console.log("\n")
    
    newMatch.scoreGoal(team1, team1.players[0]!);
    console.log("\n")

    newMatch.passTheBall(team2.players[4]!, team1.players[3]!)
    console.log("\n")

    newMatch.scoreGoal(team2, team2.players[0]!);
    console.log("\n")
    // console.log("score: ", newMatch.getScore());

    console.log("Game over \n");
    newMatch.getResult();
}
main()