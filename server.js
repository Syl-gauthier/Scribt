const express = require('express');
const app = express();

//routes
const general = require('./routes/general');
const help = require('./routes/help');
const learn = require('./routes/learn');
const share = require('./routes/share');

app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));
app.set('view engin', 'pug');
app.use(general);
app.use(help);
app.use(learn);
app.use(share);
var port = process.argv[2] || 3000;
app.listen(port);
console.log('app listening on port ' + port);