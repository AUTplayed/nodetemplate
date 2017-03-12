//External Dependencies
var express = require('express');
var app = express();
var path = require('path');

//Internal Dependencies

//Declarations

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT || 8080);