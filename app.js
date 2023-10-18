const signUpAsset={
  id:"",
  password : "",
  email: "",
  inputBoxColor : "#D9D9D9" ,
  textColor : "#B6B6B6",
  pointColor :  "#FF6666"
}

module.exports = signUpAsset

var http = require('http');
var querystring = require('querystring');
const port = 3000;

http.createServer(function(req, res) {
  fs.readFile('./index.html' ,'utf8' ,function(error, data) {
        if(req.method == 'POST'){
        req.on('data', function(chunk){
            console.log(chunk.toString());
            var data = querystring.parse(chunk.toString());
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end('ID : ' + data.id + 'PW : ' + data.pw);
        });
    }})

}).listen(port, function() {
    console.log('Serve');
});