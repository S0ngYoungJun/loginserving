const http = require('http');
const fs = require("fs")
const querystring = require('querystring');
const signUpAsset = require('./module')
const port = 5000;
const regex=/^[a-z0-9]*$/;
const regey=/^[A-Z0-9]*$/;
const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

http.createServer(function(req, res) {
   if(req.method === 'GET' && req.url==="/"){
    fs.readFile('./index.html' ,'utf8' ,function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    })}
    
    if(req.method === 'POST' && req.url==="/login"){
        var body = '';
        req.on('data', (chunk)=>{
            body += chunk.toString()
        })
        req.on('end', () => {
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            const data = querystring.parse(body);
            console.log(data);
            if(!regex.test(data.id) && !regey.test(data.id) && data.pw===data.pw1 
            && exptext.test(data.email)==true){
                
                res.end(`<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                </head>
                <body>
                  <form method="POST" action="/send">
                    <div class='pp'><span class="cc">${data.id}</span>님! 반갑습니다. 저에게 편지를 보내주세요!</div>
                
                     Title : <input type="text" name="title" id="tibox" placeholder="">
                     <br>
                     Text : <input type="text" name="text" id="tbox" placeholder="">
                    <input class="btn" type="submit" name="send">
                  </form>
                  <script>
                   let p = document.querySelector(".pp")
                   let c = document.querySelector(".cc")
                   let title = document.getElementById("tibox")
                   let text = document.getElementById("tbox")
                   let send = document.getElementById("send")
                   title.style.width="30vw"
                   title.style.height="30vh"
                   title.style.backgroundColor="${signUpAsset.inputBoxColor}"
                   text.style.width="30vw"
                   text.style.height="30vh"
                   text.style.backgroundColor="${signUpAsset.inputBoxColor}"
                   p.style.color="${signUpAsset.textColor}"
                   c.style.color="${signUpAsset.pointColor}"
                   send.style.width= "5vw"
                   send.style.height= "5vw"
                   send.style.color="white"
                   send.style.backgroundColor="${signUpAsset.pointColor}"
                  </script>
                </body>
                </html>
                        ` 
                   )
            } 
        })}
    if(req.method == 'POST'&& req.url==="/send"){
          var head = '';
        req.on('data', (free)=>{
            head += free.toString()
        })
        req.on('end', () => {
          const meta = querystring.parse(head);
          console.log(meta);
          res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
          if(meta.title!=="" && meta.text!==""){
          res.end("love")}
        })
      }
        
    }).listen(port, function() {
    console.log('Serve');
});