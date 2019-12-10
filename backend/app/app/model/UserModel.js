'user strict';
var sql = require('./db.js');

//Usuario object constructor
var Usuario = function(Usuario){
    this.nome = Usuario.nome;
    this.email = Usuario.email;
    this.telefone = Usuario.telefone;
    this.senha = Usuario.senha;
    this.endereco = Usuario.endereco;
    this.admin = Usuario.admin;
};
Usuario.createUsuario = function (newUsuario, result) {    
        sql.query("INSERT INTO Usuarios set ?", newUsuario, function (err, res) {
                
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
Usuario.getUsuarioById = function (UsuarioId, result) {
        sql.query("Select * from Usuarios where id = ?", UsuarioId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Usuario.getAllUsuario = function (result) {
        sql.query("Select * from Usuarios", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Usuarios : ', res);  

                 result(null, res);
                }
            });   
};
Usuario.updateById = function(id, Usuario, result){
  sql.query("UPDATE Usuarios SET ? WHERE id = ?", [Usuario, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Usuario.remove = function(id, result){
     sql.query("DELETE FROM Usuarios WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Usuario;