import fruits from './fruit';
import {remove, choice} from './helpers';

// randomly draw fruits from array
let fruit = choice(fruits);

//message I would like one random fruit plase 
console.log('I would like one ${fruit}, please.');

//remove the fruit from array
let remaining = remove(fruits, fruit);

console.log('I am sorry we are all out. We have ${remaining.length} left.');