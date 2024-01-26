var express= require("express");
var app=express();
// var bodyparser =required ('body parser');

app.get('/',function (req,res)
 {
    res.sendFile(__dirname + "/"+"index.html");
});

app.get('/home',function(req,res)
{
res.send('<h1>welcome' + req.query['username']+'</h1><br><h2>mail Id :'+req.query['mail id']+'</h2>');

});
app.listen(8080);