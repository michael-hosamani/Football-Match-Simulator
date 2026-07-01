import { playerActions, playerRole } from "./enums.js";

export class Player{
    public playerName: string;
    public jerseyNumber: number;
    public role: playerRole;
    // public actions: playerActions;
    public actions: playerActions | null;
    public scoredGoals: number;

    constructor(playerName: string, actions: playerActions | null, jerseyNumber: number, role: playerRole, scoredGoals = 0){
        this.playerName = playerName;
        this.actions = actions;
        this.jerseyNumber = jerseyNumber;
        this.role = role;
        this.scoredGoals = scoredGoals;
    }
    
    // this function performs a common action
    performAction(action: playerActions){
        this.actions = action;
        console.log("action: ", playerActions[this.actions]);
    }

    incrementGoal(){
        this.scoredGoals++;
    }

}

export class Striker extends Player{
    public role: playerRole = playerRole.Striker;

    constructor(playerName: string, actions: playerActions | null, jerseyNumber: number, role: playerRole){
        super(playerName, actions, jerseyNumber, role);
        // this.role = playerRole.Striker;
    }

    // striker shoots the ball
    shoot(){
        console.log("shoot");
    }
}

export class Midfielder extends Player{
    public role: playerRole;

    constructor(playerName: string, actions: playerActions | null, jerseyNumber: number, role: playerRole){
        super(playerName, actions, jerseyNumber, role);
        this.role = playerRole.Midfielder;
    }

    // midfielder performs a long pass
    longPass(){
        console.log("long Pass");
    }
}

export class Defender extends Player{
    public role: playerRole;

    constructor(playerName: string, actions: playerActions | null, jerseyNumber: number, role: playerRole){
        super(playerName, actions, jerseyNumber, role);
        this.role = playerRole.Defender;
    }

    // defender tackles
    tackle(){
        console.log("tackle");
    }
}

export class GoalKeeper extends Player{
    public role: playerRole;

    constructor(playerName: string, actions: playerActions | null, jerseyNumber: number, role: playerRole){
        super(playerName, actions, jerseyNumber, role);
        this.role = playerRole.GoalKeeper;
    }

    // goalkeeper saves the goal
    saveGoal(){
        console.log("save goal");
    }
}