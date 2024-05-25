//웹서버 만드는 코드
const express = require('express');
const app = express();

app.use("/", function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(8082);


// 웹소켓 열기
const WebSocket = require('ws');

const socket = new WebSocket.Server({
  port : 8081
});


//웹소켓으로 오는 유저메세지 받기
socket.on('connection', (ws, req) => {

  ws.on('message', (msg)=>{
    console.log('유저가 보낸 메세지 : ' + msg);

    ws.send('그럼 제가 선배 맘에 탕탕 후루후루 탕탕탕!! 사요나라 센빠이');
  })

});


// ws대신 socker.io 라이브러리를 쓰면 

// -연결 끊기면 자동재접속 기능
// -웹소켓 접속자마다 자동 id부여
// -모든 웹소켓 유저에게 전체 메세지 전송가능
// -웹소켓방 생성가능
