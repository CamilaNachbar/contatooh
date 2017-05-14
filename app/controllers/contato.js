var model = require('../controllers/contato')

var contato = [
    {
        _id: 1, nome: 'Ariel', email: 'afnh@live.com'
    }
];

module.exports= function(){
    var controller ={};
    controller.listaContatos = function(req, res){
        res.json(contato)
    };
    return controller;
};