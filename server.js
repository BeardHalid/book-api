import pkg from 'json-server'
const {create, router, defaults} = pkg;

const server = pkg.create();
const myRouter = pkg.router('db.json')
const middleWares = pkg.defaults();
const port = process.env.PORT || 3000;

server.use(middleWares);
server.use(myRouter);

server.listen(port);