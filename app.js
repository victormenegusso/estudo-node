console.log('arq app.js');
var app = require('./config/express')()
var routesProdutos = require('./app/routes/produtos')(app);

console.log('insano');
console.log(routesProdutos);

app.listen(3000, function(){
    console.log("servidor rodando");

});