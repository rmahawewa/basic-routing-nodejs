const http = require('http');
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    res.write("This is the first line", (error) => console.log(123));
    // res.end();




    fs.readFile("./views/index.html", (error, data) => {
        if(error){
            console.log(error);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

}).listen(8080);