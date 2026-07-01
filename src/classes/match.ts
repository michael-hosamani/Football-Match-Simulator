import { Commentary } from "./commentary.js";
import { playerActions } from "./enums.js";
import type { Player } from "./player.js";
import type { Team } from "./team.js";

export class Match{
    public team1: Team;
    public team2: Team;
    public result: string = "";
    public score: string =  "";
    public commentary: Commentary;

    constructor(team1: Team, team2: Team){
        this.team1 = team1;
        this.team2 = team2;
        this.commentary = new Commentary(team1, team2);
    }

    // this function gets the current score  
    getScore(){
        this.score = `${this.team1.teamName}: ${this.team1.goals} | ${this.team2.teamName}: ${this.team2.goals}`;
        // return this.score;
        console.log("score: ", this.score)
    }

    // this function provides the end result of the game
    getResult(){
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
    scoreGoal(team: Team, player: Player){
        const random = Math.random();
        if(random > 0.5){ // if random value is greater than 5 then a goal is scored else it is not scored
            if(this.team1 === team){
                this.team1.goals++;
                
                this.team1.players.find(p => p == player)!.incrementGoal();
                
                this.commentary.commentOnGoal(this.team1, this.team1.players.find(p => p == player)!);
                
                this.team1.players.find(p => p == player)!.performAction(playerActions.Celebrate)
            }
            else{
                this.team2.goals++;

                this.team2.players.find(p => p == player)!.incrementGoal();
                
                this.commentary.commentOnGoal(this.team2, this.team2.players.find(p => p == player)!)
                
                this.team2.players.find(p => p == player)!.performAction(playerActions.Celebrate)
            }
            this.getScore()
        }
        else{
            const currTeam: Team = team === this.team1 ? this.team1 : this.team2;
            this.commentary.genericComment(`${currTeam.players.find(p => p == player)!.playerName} was unable to score the goal`);
            this.getScore()
            this.team2.players[0]?.performAction(playerActions.Run)
        }
    }

    // this function simulates passing the ball
    passTheBall(playerA: Player, playerB: Player){
        console.log("Ball is being passed")
        playerA.performAction(playerActions.Pass)
        this.commentary.commentOnPass(playerA, playerB);
    }
}