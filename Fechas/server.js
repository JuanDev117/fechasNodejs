const http = require('http');


const server = http.createServer((req,res)=> {

    res.writeHead(200,{'Content-Type':'text/plain'});
    
    res.end('Hola Mundo desde Node.js');
});


server.listen(3000, "127.0.0.1", () => {

    console.log("servver runnig...");
});