// The http.createServer() method includes request and response parameters which is supplied by Node.js.
//The request object can be used to get information about the current HTTP request e.g url, request header, and data.

//The response object can be used to send a response for a current HTTP request.

const http = require("http");
const server = http.createServer((req, res) =>{
    //console.log(req.url);
    if(req.url == "/"){
    res.end("Hello from the other side");
    }else if(req.url == "/about"){
        res.end("Hello from the AboutUs side");
    }else if(req.url == "/contact"){
        res.end("Hello from the ContactUs side");
    }else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>404 error pages. Page doesn't exist!</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no. 8000");
});