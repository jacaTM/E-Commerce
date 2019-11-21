'use strict';

var Usuario = require('../model/UserModel.js');
//Usuario
exports.list_all_Usuario = function(req, res) {
  Usuario.getAllUsuario(function(err, Usuario) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', Usuario);
    res.send(Usuario);
  });
};



exports.create_a_Usuario = function(req, res) {
  var new_Usuario = new Usuario(req.body);

  //handles null error 
   if(!new_Usuario.nome && !new_Usuario.email && !new_Usuario.endereco && !new_Usuario.senha && !new_Usuario.telefone){

            res.status(400).send({ error:true, message: 'Please provide everything' });

        }
else{
  
  Usuario.createUsuario(new_Usuario, function(err, Usuario) {
    
    if (err)
      res.send(err);
    res.json(Usuario);
  });
}
};


exports.read_a_Usuario = function(req, res) {
  Usuario.getUsuarioById(req.params.id, function(err, Usuario) {
    if (err)
      res.send(err);
    res.json(Usuario);
  });
};


exports.update_a_Usuario = function(req, res) {
  Usuario.updateById(req.params.id, new Usuario(req.body), function(err, Usuario) {
    if (err)
      res.send(err);
    res.json(Usuario);
  });
};


exports.delete_a_Usuario = function(req, res) {


  Usuario.remove( req.params.id, function(err, Usuario) {
    if (err)
      res.send(err);
    res.json({ message: 'Usuario successfully deleted' });
  });
};
