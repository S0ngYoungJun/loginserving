var http = require('http');
var fs = require("fs")
var querystring = require('querystring');
var signUpAsset = require('./module')
const port = 5000;
var regex=/^[a-z0-9]*$/;
var regey=/^[A-Z0-9]*$/;
var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

http.createServer(function(req, res) {
  
    fs.readFile('./index.html' ,'utf8' ,function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    }) 
    
    if(req.method === 'POST'){
        var body = '';
        req.on('data', (chunk)=>{
            body +=chunk.toString()
        })
        req.on('end', () => {
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            var data = querystring.parse(body);
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
                  <form method="post" action="/send">
                    <div class='pp'><span class="cc">${data.id}</span>님! 반갑습니다. 저에게 편지를 보내주세요!</div>
                    <div>
                     Title : <input type="text" id="tibox" placeholder=""></div>
                     <br>
                     <div>Text : <input type="text" id="tbox" placeholder=""></div>
                    <input class=btn type="submit" id="send">
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
            head +=free.toString()
        })
        req.on('end', () => {
          res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
          var meta = querystring.parse(head);
          console.log(meta);
          res.end("love")
        })
      }
        
    }).listen(port, function() {
    console.log('Serve');
});