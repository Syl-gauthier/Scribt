var express = require('express');
var app = express();

app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));
app.set('view engin', 'pug');
app.get('/', function (req, res) {
  res.render('index.pug');
});
var port = process.argv[2] || 3000;
app.listen(port);
console.log('app listening on port ' + port);