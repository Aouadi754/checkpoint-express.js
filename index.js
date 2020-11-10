const express = require('express');
const app = express();
const port = 4000;

app.use(verify)
app.use(express.static('Public'))
app.get('/',function(req, res){
    res.end('<!DOCTYPE html>'+
    '<html lang="en">'+
    '<head>'+
        '<meta charset="UTF-8">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
       ' <title>WS-Express</title>'+
        '<link rel="stylesheet" href="style.css" />'+
    '</head>'+
    '<body>'+
        '<h1>Welcome to Home page</h1>'+
    
        '<a href="Home_page.html">Home</a>'+
        '<a href="contact_us.html">Contact</a>'+
        '<a href="our_services.html">Services</a>'+
    '</body>'+
    '</html>');
});


function verify(req,res,next){
    let today = new Date()
    if(today.getDay()!== (6 && 0) && (today.getHours()>=9 && today.getHours()<=17)){
        next()
    } else {
        res.send('<html><head><link rel="stylesheet" href="/css/style.css"></head><body>' +
        '<div class="main"><p>Sorry we are currently closed. Try during weekdays between 9am and 5pm.</p></div>' +
        '</body></html>')
    }
}
app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });