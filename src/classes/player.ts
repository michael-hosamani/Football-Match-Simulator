import { playerActions, playerRole } from "./enums.js";

export class Player{
    public playerName: string;
    public jerseyNumber: number;
    public role: playerRole;
    // public actions: playerActions;
    public scoredGoals: number;

    constructor(playerName: string, jerseyNumber: number, role: playerRole, scoredGoals = 0){
        this.playerName = playerName;
        this.jerseyNumber = jerseyNumber;
        this.role = role;
        this.scoredGoals = scoredGoals;
    }
    
    // this function performs a common action
    performAction(action: playerActions){
        console.log("action: ", playerActions[action]);
    }

    // this function is used to increment goal count of a certain player
    incrementGoal(){
        this.scoredGoals++;
    }

}

export class Striker extends Player{
    public role: playerRole = playerRole.Striker;

    constructor(playerName: string, jerseyNumber: number, role: playerRole){
        super(playerName, jerseyNumber, role);
    }

    // striker shoots the ball
    shoot(){
        console.log(`${this.playerName} shot the ball`);
    }
}

export class Midfielder extends Player{
    public role: playerRole;

    constructor(playerName: string, jerseyNumber: number, role: playerRole){
        super(playerName, jerseyNumber, role);
        this.role = playerRole.Midfielder;
    }

    // midfielder performs a long pass
    longPass(){
        console.log(`${this.playerName} made a long pass`);
    }
}

export class Defender extends Player{
    public role: playerRole;

    constructor(playerName: string, jerseyNumber: number, role: playerRole){
        super(playerName, jerseyNumber, role);
        this.role = playerRole.Defender;
    }

    // defender tackles
    tackle(){
        console.log(`${this.playerName} tackled`);
    }
}

export class GoalKeeper extends Player{
    public role: playerRole;

    constructor(playerName: string, jerseyNumber: number, role: playerRole){
        super(playerName, jerseyNumber, role);
        this.role = playerRole.GoalKeeper;
    }

    // goalkeeper saves the goal
    saveGoal(){
        console.log(`${this.playerName} saved a goal`);
    }
}