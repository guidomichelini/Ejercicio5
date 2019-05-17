var express = require('express');
var app = new express();

console.log(__dirname)



app.use(express.static(__dirname));


app.get('/', function(request, response) {
    response.sendfile('index.html');
});

app.listen(3000);