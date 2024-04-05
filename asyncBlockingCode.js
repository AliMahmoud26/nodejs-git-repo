const http = require('http');

const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {
            res.end('Welcome to our home page')
        } else if (req.url === '/about') {
            res.end('Welcome to our about page')
        } else {
            res.end('Sorry there is no page with this name');
        }
    }
)

server.listen(5000, () => {
    console.log('Server listening on port 5000...')
})