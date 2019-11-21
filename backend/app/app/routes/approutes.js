'use strict';
module.exports = function(app) {
    var Produtos = require('../controller/ProdutoController');
    var Usuario = require('../controller/UserController');
    var Venda = require('../controller/VendaController');

    // Produtos Routes
    app.route('/produto')
        .get(Produtos.list_all_Produtos)
        .post(Produtos.create_a_Produtos);

    app.route('/produto/:id')
        .get(Produtos.read_a_Produtos)
        .put(Produtos.update_a_Produtos)
        .delete(Produtos.delete_a_Produtos);
    // Usuario Routes
    app.route('/usuario')
        .get(Usuario.list_all_Usuario)
        .post(Usuario.create_a_Usuario);

    app.route('/usuario/:id')
        .get(Usuario.read_a_Usuario)
        .put(Usuario.update_a_Usuario)
        .delete(Usuario.delete_a_Usuario);
    // Vendas Routes
    app.route('/venda')
        .get(Venda.list_all_Venda)
        .post(Venda.create_a_Venda);

    app.route('/venda/:id')
        .get(Venda.read_a_Venda)
        .put(Venda.update_a_Venda)
        .delete(Venda.delete_a_Venda);
};