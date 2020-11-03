const express = require('express');
const app = express();

app.use(function(req, res, next){ 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
        res.redirect(`https://${req.headers.host}${req.url}`); 
    else
        next(); 
});

app.get("/",function(req,res){
     res.sendFile(__dirname+"/hora.html")
    
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('funfando');
});


