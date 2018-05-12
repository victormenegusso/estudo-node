var htttp = require('http');
var server = htttp.createServer(function(req,res){
   if(req.url == "/produtos") {
    res.end("<html><h1>listando</h1></html>"); 
   } else {
    res.end("<html><h1>home</h1></html>"); 
   }
});
server.listen(3000);
console.log("servidor rodando");