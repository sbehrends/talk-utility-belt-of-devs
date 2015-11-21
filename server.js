var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    io = require('socket.io').listen(app.listen(port));

app.use(express.static(__dirname + '/'));


io.on('connection', function(socket){
  console.log('User connected');
  socket.on('doSlideChange', function(data){
    io.emit('slideChange', data);
  });
});