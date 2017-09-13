const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Message = require('./message');

const messages = [];

app.get('/', (req, res) => {
  res.send("hi")
});

app.get('/newMessage/:user', (req, res) => {
  let newMessage = new Message(req.query.message, req.params.user);
  messages.push(newMessage);
  res.send({
    status: 0,
    message: newMessage
  })
});

app.get('/getMessages/', (req, res) => {
  let messagesToSend = {messages: []}
  for (let message of messages) {
    messagesToSend.messages.push(message.getMessage());
  }
  res.send(messagesToSend);
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});