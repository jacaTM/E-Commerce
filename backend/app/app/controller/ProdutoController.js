'use strict';

var Produtos = require('../model/ProdutoModel.js');
//Produtos
exports.list_all_Produtos = function(req, res) {
  Produtos.getAllProdutos(function(err, Produtos) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Produtos);
    res.send(Produtos);
  });
};



exports.create_a_Produtos = function(req, res) {
  var new_Produtos = new Produtos(req.body);

  //handles null error 
   if(!new_Produtos.nome && !new_Produtos.descricao && !new_Produtos.preco && !new_Produtos.quantidade){

            res.status(400).send({ error:true, message: 'Please provide everything' });

        }
else{
  
  Produtos.createProdutos(new_Produtos, function(err, Produtos) {
    
    if (err)
      res.send(err);
    res.json(Produtos);
  });
}
};


exports.read_a_Produtos = function(req, res) {
  Produtos.getProdutosById(req.params.id, function(err, Produtos) {
    if (err)
      res.send(err);
    res.json(Produtos);
  });
};


exports.update_a_Produtos = function(req, res) {
  Produtos.updateById(req.params.id, new Produtos(req.body), function(err, Produtos) {
    if (err)
      res.send(err);
    res.json(Produtos);
  });
};


exports.delete_a_Produtos = function(req, res) {


  Produtos.remove( req.params.id, function(err, Produtos) {
    if (err)
      res.send(err);
    res.json({ message: 'Produtos successfully deleted' });
  });
};
