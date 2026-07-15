import { findPlayer } from "../helpers/findPlayer.js";
import { isGoalSaved } from "../helpers/isGoalSaved.js";
import { manageGoalSaved } from "../helpers/manageGoalSaved.js";
import { manageGoalScored } from "../helpers/manageGoalScored.js";
import { Commentary } from "./commentary.js";
import { playerActions } from "./enums.js";
import type { Player } from "./player.js";
import type { Team } from "./team.js";

export class Match{
    private team1: Team;
    private team2: Team;
    private result: string = "";
    private score: string =  "";
    private commentary: Commentary;

    constructor(team1: Team, team2: Team){
        this.team1 = team1;
        this.team2 = team2;
        this.commentary = new Commentary();
    }

    // this function gets the current score  
    displayScore(){
        this.score = `${this.team1.teamName}: ${this.team1.goals} | ${this.team2.teamName}: ${this.team2.goals}`;
        // return this.score;
        console.log("score: ", this.score)
    }

    // this function provides the end result of the game
    displayResult(){
        if(this.team1.goals > this.team2.goals){
            this.result = `${this.team1.teamName} won the match`;
            console.log(this.result);
        }
        else if(this.team1.goals < this.team2.goals){
            this.result = `${this.team2.teamName} won the match`;
            console.log(this.result);
        }
        else{
            this.result = "Match is tied";
            console.log(this.result);
        }
    }

    // this function simulates scoring a goal
    scoreGoal(team: Team, player: Player, goalKeeper: Player){
        const currentPlayer = findPlayer(team, player);
        if(!currentPlayer){
            return;
        }
        if(!isGoalSaved()){
            if(this.team1 === team){
                manageGoalScored(team, currentPlayer, this.commentary)
            }
            else{
                manageGoalScored(team, currentPlayer, this.commentary)
            }
        }
        else{
            manageGoalSaved(team, player, this.commentary, goalKeeper)
        }
        this.displayScore()
    }

    // this function simulates passing the ball
    passTheBall(playerA: Player, playerB: Player){
        playerA.performAction(playerActions.Pass)
        this.commentary.commentOnPass(playerA, playerB);
    }
}