const friends = ['adir', 'liyana', 'afsana', 'ara'];
const output = friends.map(friends => friends.length);
console.log(output);

const products = [
    { name: 'water bottle', price: 50, color: "yellow" },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]

const productName = products.map(products => products.name);
console.log(productName);

const productPrice = products.map(products => products.price);
console.log(productPrice);

//forEach 
products.forEach(product =>console.log(product));