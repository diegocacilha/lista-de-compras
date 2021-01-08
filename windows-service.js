var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Lista de Compras',
  description: 'Lista de produtos para comprar no mercado',
  script: __dirname
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();