const jsonDiff = require('./index.js');

const json1 = { name: 'John', age: 30 };
const json2 = { name: 'John', age: 35, city: 'New York' };
const diff = jsonDiff(json1, json2);
console.log(diff);