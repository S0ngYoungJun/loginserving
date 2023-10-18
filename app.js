
var http = require('http');
var fs = require("fs")
var querystring = require('querystring');
const port = 3000;
var regex=/^[a-z0-9]*$/;
var regey=/^[A-Z0-9]*$/;
var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
let view = require('view.html')
http.createServer(function(req, res) {
  
    fs.readFile('./index.html' ,'utf8' ,function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    }) 
    fs.readFile('./view.html' ,'utf8' ,function(error, data) {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(data);})
 
    if(req.method == 'POST'){
        req.on('data', function(chunk){
            console.log(chunk.toString());
            var data = querystring.parse(chunk.toString());
            res.writeHead(200, {'Content-Type' : 'text/html'});
            
            if(!regex.test(data.id) && !regey.test(data.id) && data.pw===data.pw1 
            && exptext.test(data.email)==true){
          
             res.end(view)}
           
          }) 
        }}).listen(port, function() {
    console.log('Serve');
});