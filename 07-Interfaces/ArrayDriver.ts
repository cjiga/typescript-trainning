import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let coaches: Coach[] = [];
coaches.push(cricketCoach);
coaches.push(golfCoach);

for (const coache of coaches) {
  console.log(coache.getDailyWorkout());
}
