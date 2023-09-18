import foods from "./foods";
import { choice, remove } from "./helpers";

let food = choice(foods);

console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
let remaining = remove(foods, food);
console.log(`Delicious! May I have another?`);
console.log(
  `I'm sorry, we're all out. We have ${remaining.length} other foods left.`
);
