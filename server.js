import {create, router, defaults} from 'json-server'

const server = create();
const myRouter = router('db.json')
const middleWares = defaults();
const port = process.env.PORT || 3000;

server.use(middleWares);
server.use(myRouter);

server.listen(port);