var http = require('http');
var router = require('./router.js');

var port = process.env.port || 4000;

var server = http.createServer(router).listen(port, function() {
    console.log('Server is listening on port', port);
});
