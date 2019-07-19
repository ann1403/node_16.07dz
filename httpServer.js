const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
    }
    // res.writeHead(200, {
    //     "Content-type": "text/plain"
    // })
    // // res.end('<h1>123</h1>')
    // fs.readFile(__dirname + '/public/' + req.url, 'utf-8', (err, data) => {
    //     //     res.end(data)

    //     // })

    if (req.url === '/') {
        fs.readFile(__dirname + '/public/index.html', 'utf-8', (err, data) => {
            res.writeHead(200, { "Content-type": "text/html" })
            res.end(data);
        });
    } else if (req.url === '/home') {
        fs.readFile(__dirname + '/public/homepage.html', 'utf-8', (err, data) => {
            res.writeHead(200, { "Content-type": "text/html" })
            res.end(data);
        });

    } else if (req.url === '/about') {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end('Here is text about us')
    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end('<h3>Try to /</h3> <h1>404</h1>')
    }
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Listening on port 3000')
})