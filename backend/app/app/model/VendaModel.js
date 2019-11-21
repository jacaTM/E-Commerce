'user strict';
var sql = require('./db.js');

//Venda object constructor
var Venda = function(Venda){
    this.idProduto = Venda.idProduto;
    this.idUsuario = Venda.idUsuario;
    this.quantidade = Venda.quantidade;
};
Venda.createVenda = function (newVenda, result) {    
        sql.query("INSERT INTO Vendas set ?", newVenda, function (err, res) {
                
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
Venda.getVendaById = function (VendaId, result) {
        sql.query("Select * from Vendas where id = ?", VendaId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Venda.getAllVenda = function (result) {
        sql.query("Select * from Vendas", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Vendas : ', res);  

                 result(null, res);
                }
            });   
};
Venda.updateById = function(id, Venda, result){
  sql.query("UPDATE Vendas SET ? WHERE id = ?", [Venda, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Venda.remove = function(id, result){
     sql.query("DELETE FROM Vendas WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Venda;