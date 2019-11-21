'use strict';

var Venda = require('../model/VendaModel.js');
//Venda
exports.list_all_Venda = function(req, res) {
  Venda.getAllVenda(function(err, Venda) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Venda);
    res.send(Venda);
  });
};



exports.create_a_Venda = function(req, res) {
  var new_Venda = new Venda(req.body);

  //handles null error 
   if(!new_Venda.quantidade && !new_Venda.idUsuario && !new_Venda.idProduto){

            res.status(400).send({ error:true, message: 'Please provide everything' });

        }
else{
  
  Venda.createVenda(new_Venda, function(err, Venda) {
    
    if (err)
      res.send(err);
    res.json(Venda);
  });
}
};


exports.read_a_Venda = function(req, res) {
  Venda.getVendaById(req.params.id, function(err, Venda) {
    if (err)
      res.send(err);
    res.json(Venda);
  });
};


exports.update_a_Venda = function(req, res) {
  Venda.updateById(req.params.id, new Venda(req.body), function(err, Venda) {
    if (err)
      res.send(err);
    res.json(Venda);
  });
};


exports.delete_a_Venda = function(req, res) {


  Venda.remove( req.params.id, function(err, Venda) {
    if (err)
      res.send(err);
    res.json({ message: 'Venda successfully deleted' });
  });
};
