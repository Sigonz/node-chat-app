const path = require('path');
const express = require('express');
const socketIo =require('socket.io');
const http = require('http');

const {generateMessage} = require('./utils/message');

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const publicPath =path.join(__dirname,'../public');


app.use(express.static(publicPath));
var io = socketIo(server);
io.on('connection',(socket)=>{
    socket.on('disconnect',()=>{
        console.log('User disconnected ');
    });
    socket.emit('newMessage',generateMessage('Admin','Welcome here!'));
    socket.broadcast.emit('newMessage',generateMessage('Admin','New User Joined.'));
    socket.on('createMessage',(message,callback)=>{
        console.log(message);
        io.emit('newMessage',generateMessage(message.from,message.text));
        callback('This is from Server');
    });

});



server.listen(PORT,()=>{
    console.log(`App started on Port : ${PORT}`);
});