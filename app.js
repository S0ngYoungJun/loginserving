
var http = require('http');
var fs = require("fs")
var querystring = require('querystring');
var signUpAsset = require('./module')
const port = 3000;
var regex=/^[a-z0-9]*$/;
var regey=/^[A-Z0-9]*$/;
var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
http.createServer(function(req, res) {
  
    fs.readFile('./index.html' ,'utf8' ,function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    }) 
   
    if(req.method == 'POST'){
        req.on('data', function(chunk){
            console.log(chunk.toString());
            var data = querystring.parse(chunk.toString());
            res.writeHead(200, {'Content-Type' : 'text/html'});
            
            if(!regex.test(data.id) && !regey.test(data.id) && data.pw===data.pw1 
            && exptext.test(data.email)==true){
              res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
             res.end(`<!DOCTYPE html>
             <html lang="en">
             <head>
               <meta charset="UTF-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <title>Document</title>
             </head>
             <body>
               <form method="post" action="">
                 <div class='pp'><span class="cc">${data.id}</span>님! 반갑습니다. 저에게 편지를 보내주세요!</div>
                 <div>
                  Title : <input type="text" name="tibox" placeholder=""></div>
                  <br>
                  <div>Text : <input type="text" name="tbox"placeholder=""></div>
                 <input class=btn type="submit" name="send">
               </form>
               <script>
                let p = document.querySelector(".pp")
                let c = document.querySelector(".cc")
                p.style.color="${signUpAsset.textColor}"
                c.style.color="${signUpAsset.pointColor}"
               </script>
             </body>
             </html>` )}
           
          }) 
        }}).listen(port, function() {
    console.log('Serve');
});