const item = require('../dao/lista.itens')();
const rota = require('../../config/config').rotas;
const multer = require('multer');
const upload = multer();


module.exports = function(app){
    app.delete(rota.itens, upload.none(), function(req,res){
        item.remove(req.body.id)
            .then(() => {
                // TEM QUE ALTERAR O METHOD POIS ESTÁ ENTRANDO NUM LOOPING
                res.status(200).send();                
            })
            .catch( () => console.log('deu erro lista.itens.js'));
    });
    app.post(rota.itens, upload.none(), (req,res) => {
        item.addItem(req.body)
            .catch((err) => console.log(err))
            .then((e) => {
                res.redirect(rota.itens);
            })
    });
    app.get(rota.itens, function(req,res,next){
        item.listar()
            .then( (e) => {
                res.render('itens', {itens: e})
                // res.render('itens')
            })
            .catch( (err) => console.log(`Erro aqui na rota: ${err}`));
    });

}