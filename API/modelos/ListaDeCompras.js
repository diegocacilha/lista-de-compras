function ListaDeCompras(){
    this.itens = [];
}

ListaDeCompras.prototype = {
    addItem: function(item){
        this.itens.prototype.push(item);
    },
    removeItem: function(index){
        this.itens.prototype.remove(index);
    }
}

module.exports = ListaDeCompras;