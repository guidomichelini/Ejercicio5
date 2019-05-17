var express = require('express');
var cors = require('cors')
var app = express();

app.use(express.static(__dirname));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type, Accept");
    next();
});

app.get('/', function(request, response) {
    response.sendfile('index.html');
});

app.listen(3000);