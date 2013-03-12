var http = require('http');
var io = require('socket.io');
var port = 9090
socketServer = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('success!');
	console.log('req:::::::' + req);
});

socketServer.listen(port);


var socket= io.listen(socketServer); 

// 添加一个连接监听器
socket.on('connection', function(client){ 
	
	console.log(">>>>>>>>>>>>>>>>>>>connection");

  // 成功！现在开始监听接收到的消息
  client.on('message',function(event){ 
    console.log('Received message from client!',event); 
  }); 
  client.on('disconnect',function(){ 
    clearInterval(interval); 
    console.log('Server has disconnected'); 
  }); 
});
