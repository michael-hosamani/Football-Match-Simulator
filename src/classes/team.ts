import type { Player } from "./player.js";

export class Team{
    public teamName: string;
    public goals: number;
    public players: Player[];

    constructor(teamName: string, players: Player[]){
        this.teamName = teamName;
        this.players = players;
        this.goals = 0;
    }
}