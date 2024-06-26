const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger)

app.get(
    '/',
    logger,
    (req, res) => {
        res.send('Home page')
    }
)

app.get(
    '/about',
    logger,
    (req, res) => {
        res.send('About page')
    }
)


app.listen(
    5000,
    () => {
        console.log('server is listening on port 5000....')
    }
)