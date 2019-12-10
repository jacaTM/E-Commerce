'user strict';
var sql = require('./db.js');

//Produtos object constructor
var Produtos = function(Produtos){
    this.id = Produtos.id;
    this.nome = Produtos.nome;
    this.descricao = Produtos.descricao;
    this.plataforma = Produtos.plataforma;
    this.preco = Produtos.preco;
    this.quantidade = Produtos.quantidade;
    this.imagem = Produtos.imagem;
};
Produtos.createProdutos = function (newProdutos, result) {    
        sql.query("INSERT INTO Produtos set ?", newProdutos, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Produtos.getProdutosById = function (ProdutosId, result) {
        sql.query("Select * from Produtos where id = ?", ProdutosId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Produtos.getAllProdutos = function (result) {
        sql.query("Select * from Produtos", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Produtoss : ', res);  

                 result(null, res);
                }
            });   
};
Produtos.updateById = function(id, Produtos, result){
  sql.query("UPDATE Produtos SET ? WHERE id = ?", [Produtos, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Produtos.getByPlataforma = function(plataforma, result){
    sql.query("SELECT * FROM Produtos WHERE plataforma = ?", plataforma, function(err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
      
        }
    });
};
Produtos.remove = function(id, result){
     sql.query("DELETE FROM Produtos WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Produtos;