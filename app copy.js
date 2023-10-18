
var http = require('http');
var fs = require("fs")
var querystring = require('querystring');
var signUpAsset = require('./module')
const port = 8080;
var regex=/^[a-z0-9]*$/;
var regey=/^[A-Z0-9]*$/;
var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;



http.createServer(function(req, res) {
  
    fs.readFile('./index.html' ,'utf8' ,function(error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    }) 

    if(req.method == 'POST' && req.url ==='/login'){
        var body = '';
        req.on('data', (chunk)=>{
            // console.log(chunk.toString());
            body +=chunk.toString()
            // res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        })
        req.on('end', () => {
            res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
             console.log(post);
             var data = querystring.parse(body);
             const{ id, pw , pw1, email} = paresBody
            console.log(`form 입력으로부터 받은 데이터 확인 ->`,parseBody)
            console.log(`form 입력으로부터 받은 데이터 확인 ->`,id)
            console.log(`form 입력으로부터 받은 데이터 확인 ->`,pw)
            console.log(`form 입력으로부터 받은 데이터 확인 ->`,pw1)
            console.log(`form 입력으로부터 받은 데이터 확인 ->`,email)
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
                   console.log(data.tibox)
                   console.log(data.tbox)
                  </script>
                </body>
                </html>` )
            }
        })}
        if(req.method == 'POST' && req.url ==='/send'){
            var body = '';
        req.on('data', (chunk)=>{
            // console.log(chunk.toString());
            body +=chunk.toString()
            // res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        })
            req.on('end', () => {
                res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
                 console.log(post);
                 var data = querystring.parse(body);
                 const{ id, pw , pw1, email} = paresBody
                console.log(`form 입력으로부터 받은 데이터 확인 ->`,parseBody)
                console.log(`form 입력으로부터 받은 데이터 확인 ->`,id)
                console.log(`form 입력으로부터 받은 데이터 확인 ->`,pw)
                console.log(`form 입력으로부터 받은 데이터 확인 ->`,pw1)
                console.log(`form 입력으로부터 받은 데이터 확인 ->`,email)
                res.end("succcess!!")
        })
        
        }
    }).listen(port, function() {
    console.log('Serve');
});