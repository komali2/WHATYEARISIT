const restify = require('restify');

const server = restify.createServer({
    name: 'whatyearisit',
    version: '0.1.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/*', restify.plugins.serveStatic({
    directory: './dist',
    default: 'index.html',
}));

server.get('/echo/:name', function (req, res, next) {
    res.send(req.params);
    return next();
});

server.listen(8000, function () {
    console.log(`${server.name} listening at ${server.url}`,);
});
