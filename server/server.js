const express = require('express');

var app = express();
var p = require('path').join(__dirname,'../public');
app.use(express.static(p));

app.listen(3000,()=>{
  console.log('Server is up and running');
})
//const io = require('socket.io').listen(server);
