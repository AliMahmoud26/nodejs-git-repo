const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'join') {
        req.user = {name: 'john', id: 3}
        console.log('authorized')
        next()
    } else {
        res.status(401).send('Unautorized')
        console.log('Unauthorized')
    }
}

module.exports = authorize