
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log(items)

console.log('Hello world');


// Stream - Big file
const {createReadStream} = require('fs')
app.js
const strean = createReadStream('./content/big.txt')