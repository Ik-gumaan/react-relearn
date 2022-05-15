const http = require('http');
const fs= require('fs');

const port=process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    console.log("REQUEST+=======>",req); 
    console.log("REQUEST URL+=======>",req.url); 

    if(req.url=='/'){
        res.status=200;
        const data=fs.readFileSync('index.html')
        res.end(data.toString());
    }

    else if(req.url=='/about'){
    res.status=200;
    res.end(`<h1>ABOUT || NODE JS SERVER</h1>`);
}

else if(req.url=='/hello'){
    res.status=200;
    res.end(`<h1>HELLO || NODE JS SERVER</h1>`);
}
else{
    res.end(`<h1>PAGE NOT FOUND</h1>`);
    res.status=404;
}

});

server.listen(port,()=>{
   console.log("SERVER IS LISTENING ON:",port); 
});