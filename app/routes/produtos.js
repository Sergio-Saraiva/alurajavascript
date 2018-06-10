module.exports = function(app){
    var listaProdutos = function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
         
         //Realiza Consulta
         produtosDAO.lista(function(err, result){
             res.render('produtos/lista',{lista:result});
         });
 
         connection.end();
     }

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function(req,res){
        console.log("cheguei aqui");
        res.render('produtos/form');
    });

    app.post('/produtos', function(req,res){

        var produto = req.body;
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, result){
            res.redirect('/produtos');
        });
    });
}