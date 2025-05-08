const http = require('http');
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    // res.write("This is the first line", (error) => console.log(123));
    // res.end();

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;  
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;  
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end(); 
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // console.log("path: ", path, res.statusCode);
    // fs.readFile("./views/index.html", (error, data) => {
    fs.readFile(path, (error, data) => {
        if(error){
            console.log(error);
            res.end();
        }else{            
            res.write(data);
            res.end();
        }
    })

}).listen(8080);