import { GOAL_PROBABILITY } from "../lib/constants.js";

// this function calculates the probability of a goal being scored
export function isGoalSaved(){
    const random = Math.random();
    // if random value is greater than ${GOAL_PROBABILITY} then a goal is scored else it is not scored
    return random > GOAL_PROBABILITY;
}