var express = require('express');
var path = require('path');
var appUno = express();
appUno.use(express.static(path.join(__dirname, 'dist')));
appUno.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
appUno.listen(8080, '0.0.0.0', function () {
    console.log("Server running on http://localhost:".concat(8080));
});
var appRadioteh = express();
appRadioteh.use(express.static(path.join(__dirname, 'dist')));
appRadioteh.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
appRadioteh.listen(8100, '0.0.0.0', function () {
    console.log("Server running on http://localhost:".concat(8100));
});
