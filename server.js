/*var other=require('./other')
console.log(other(10,30))*/

var http = require('http');
/*var uc = require('uppercase');*/
http.createServer(function(req,res){
    res.write('Hello World');
    res.end();
}).listen(4100);
