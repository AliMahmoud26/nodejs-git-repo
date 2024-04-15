const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
// const data = require('../data')

app.use([logger, authorize])
app.use(morgan('tiny'))

app.get(
    '/',
    (req, res) => {
        res.send('Home page')
    }
)

app.get(
    '/about',
    (req, res) => {
        res.send('About page')
    }
)

app.get(
    '/api/products',
    (req, res) => {
        res.send('Products page')
    }
)

app.get(
    '/api/items',
    (req, res) => {
        console.log(req.user);
        res.send('Items page')
    }
)

app.listen(
    5000,
    () => {
        console.log('server is listening on port 5000....')
    }
)