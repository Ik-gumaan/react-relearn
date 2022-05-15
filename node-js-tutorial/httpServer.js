const http = require('http');

const port=process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log("REQUEST+=======>",req); 
    console.log("REQUEST URL+=======>",req.url); 
    res.status=200;
    res.setHeader('Content-Type','text/html');
    res.end(`<h1>NODE JS SERVER</h1>`);
});

server.listen(port,()=>{
   console.log("SERVER IS LISTENING ON:",port); 
});