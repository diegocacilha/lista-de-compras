const rota = require('../../config/config').rotas;
module.exports = function(app){
    app.get(rota.home, (req,res) => {
        res.render('home', {});
    });
}