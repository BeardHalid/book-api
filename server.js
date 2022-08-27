const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleWares);
server.use(router);

server.listen(port);