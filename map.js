const numbers = [12, 13, 14, 15, 16];
const numbers2 = [];

const doubleIt = numbers => numbers * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    numbers2.push(result);
}
console.log(numbers2);

//using map

const output = numbers.map(numbers => numbers * 2);
console.log("result using map", output);

const square = numbers.map(x => x * x);
console.log("square", square);