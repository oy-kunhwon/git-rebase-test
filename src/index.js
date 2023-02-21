import { sub } from './lib/a.js';
import { sum } from './lib/b.js';

const subFoo = 3;
const subBar = 2;

const sumFoo = 2;
const sumBar = 3;

console.log('Hello world');
console.log('Hello feature A');
console.log(sub(subFoo, subBar));
console.log('Wow! feature B');
console.log(sum(sumFoo, sumBar));
