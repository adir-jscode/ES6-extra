const numbers = [5, 10, 19, 88, 17];
const result = numbers.filter(numbers => numbers > 9);
const smallNumbers = numbers.filter(numbers => numbers < 10);
console.log(smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(products => products.price > 10);
console.log(expensive);

const pink = products.filter(products => products.color == 'pink');
console.log(pink);

const blackItem = products.find(products => products.color === 'black');
console.log(blackItem);