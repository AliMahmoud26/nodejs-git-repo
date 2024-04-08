const {readFile, writeFile} = require('fs')

readFile(
    './content/first.txt',
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                const second = result
                writeFile('./content/resultAsync.txt', 'This is the new Async file I have created', (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('done with this task')
            })
        })
    }
)

console.log('starting next task')