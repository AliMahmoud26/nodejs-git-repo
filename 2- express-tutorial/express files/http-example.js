const http = require('http');

const server = http.createServer(
    (req, res) => {
        const url = req.url;
        if (url === '/') {
            res.writeHead(200, {'content-type': 'text/html'})
            res.write('<h2>home page</h2>')
            res.end()
        } else if (url === '/about') {
            res.writeHead(200, {'content-type': 'text/html'})
            res.write('<h2>about page</h2>')
            res.end()
        } else if (url === '/contact') {
            res.writeHead(200, {'content-type': 'text/html'})
            res.write('<h2>contact page</h2>')
            res.end()
        } else {
            res.writeHead(404, {'content-type': 'text/html'})
            res.write('<h2>page not found</h2>')
            res.end()
        }
    }
)

server.listen(5000)