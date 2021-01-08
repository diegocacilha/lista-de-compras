const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('port', process.env.PORT || 3000) ;



const consign = require('consign');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views','./API/views');

app.use(express.static('./src'));

app.listen(app.get('port'), function(){
    console.log(`Conectado na porta ${app.get('port')}`);
});

module.exports = function(){
    consign({cwd: 'API'})
        .include('modelos')
        .then('dao')
        .then('rotas')
        .then('generic-route')
        .into(app);
    return app;
}
