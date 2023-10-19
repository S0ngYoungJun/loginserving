const http = require('http');
const fs = rquire('fs');
const qs  = require("querystring");
const _PORT = 5010;

const server = http.createServer((req,res) => {
  console.log(req.url);
  
  
  
  
  const inputHtmlString =(data) => {
    return `
    <html></html>
    `
  };
 
 if(req.method === "GET") {
  fs.readFile('./index.html' ,'utf8' ,function(error, data) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(data);
})
 }
 
 
  if(req.method === "POST") {

    if(req.url === "/login") {
      console.log()
    }

    if(req.url === "/send") {

    }











  }
});

server.listen(_PORT, () => {
  console.log(`http://localhost:${_PORT}`);
})
