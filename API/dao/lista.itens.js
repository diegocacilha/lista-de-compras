const config = require('../../config/config.js').config;
const mysql = require('mysql2');

function itens (){
    var itens = {
        addItem: function(item){
            const conn = mysql.createConnection(config.banco);
        
            const retorno = new Promise((resolve,erro) => {
                const res = conn.query('INSERT INTO ITENS (nome) VALUES (?)', [item.nome], function(err, result){
                    if(err)
                        erro(err)
                    else 
                        resolve(result);    
                })
            });
            conn.end();
            return retorno;
        },
        listar: function(){
            const connection = mysql.createConnection(config.banco);
            const itens = new Promise(function(resolve, erro){
                var callback = function(err, result){
                    if(err)
                        erro( () => console.log(`Erro na promise: ${err}`))
                    else 
                        resolve(result);
                };
                connection.query('select * from itens', callback ); 
                
            });
            connection.end();
            return itens;
        },
        remove: function(id){
            const conn = mysql.createConnection(config.banco);
            const p = new Promise((resolve,erro) => {
                let callback = function(err,result){
                    if(err)
                        erro(() => console.log(`Erro ao remover ${err}`));
                    else
                        resolve(result);
                }
                conn.query('DELETE FROM ITENS WHERE ID = ?', [id], callback)

            });
            conn.end();
            return p;
        } 
    } 
    return itens;
}

module.exports = itens;