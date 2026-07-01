import { playerActions, playerRole } from "../classes/enums.js"
import { Defender, GoalKeeper, Midfielder, Player, Striker } from "../classes/player.js"

const player1: Player = new Striker("jimmy", playerActions.Run, 10, playerRole.Striker)
const player2: Player = new Striker("james", playerActions.Run, 9, playerRole.Striker)
const player3: Player = new Midfielder("mike", playerActions.Run, 20, playerRole.Midfielder)
const player4: Player = new Defender("lebron", playerActions.Run, 23, playerRole.Defender)
const player5: Player = new GoalKeeper("steph", playerActions.Run, 30, playerRole.GoalKeeper)

export const team1Players: Player[] = [player1, player2, player3, player4, player5]

const player6: Player = new Striker("luka", playerActions.Run, 77, playerRole.Striker)
const player7: Player = new Striker("jalen", playerActions.Run, 3, playerRole.Striker)
const player8: Player = new Midfielder("jokic", playerActions.Run, 4, playerRole.Midfielder)
const player9: Player = new Defender("klay", playerActions.Run, 11, playerRole.Defender)
const player10: Player = new GoalKeeper("kevin", playerActions.Run, 10, playerRole.GoalKeeper)

export const team2Players: Player[] = [player6, player7, player8, player9, player10]