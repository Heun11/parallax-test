var express = require('express');
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname,'pages')))
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'js')));
app.use(express.static(path.join(__dirname,'resources')));

app.use('/', function(req, res, next){
    console.log("A new request received at " + Date.now());
    next();
 });

app.get('/', function(req, res){
   res.sendFile('home.html', {root: __dirname+'/pages'});
});

app.get('*', function(req, res){
    res.sendFile('404.html', {root: __dirname+'/pages'});
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});