const {readFileSync, writeFileSync, write} = require('fs');

const first = readFileSync(
    './content/first.txt',
    'utf8'
)
const second = readFileSync(
    './content/second.txt',
    'utf8'
)

writeFileSync(
    './content/resultSync.txt',
    'This is the new file I have just created'
)

// console.log(first, second)

console.log('done with this task')
console.log('starting the next one')