    console.log('app/routes/produtos.js');

    module.exports = function(app) {
        
        app.get('/produtos',function(req,res) {
        
            var mysql = require('mysql'); // objeto do mysql
            
            var con = mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'',
                database:'casadocodigo'
            });

            con.query('select * from livros',function(err,result){
                res.send(result);
            });

            con.end();

            res.render("produtos/lista");
        });
    }