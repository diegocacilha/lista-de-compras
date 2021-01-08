const rota = require('../../config/config').rotas;
module.exports = function(app){
    app.get(rota.login, function(req,res){
        res.send('Rota LOGIN');
    });
}