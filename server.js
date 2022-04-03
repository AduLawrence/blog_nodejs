const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    //the routing
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
    }


    //read the page and send
    fs.readFile(path, (err, data) =>{
        if(err){
            res.end('<h1>An error occurred!</h1>');
        }else{
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('we are now live and listening to requests');
});