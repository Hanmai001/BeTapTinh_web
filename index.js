var express = require('express');
var app = express();
const path = require('path');

app.use(express.static('src'))

app.get('/', function (req, res) {
    var file = path.join(__dirname, '/src/default.html');
    res.sendFile(file);
});
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});