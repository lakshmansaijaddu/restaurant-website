const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;
const basePath = '/home/site/wwwroot';

const server = http.createServer((req, res) => {
    let filePath = path.join(basePath, req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
        } else {
            res.writeHead(200);
            res.end(content);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
