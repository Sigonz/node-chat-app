const path = require('path');
const express = require('express');
const socketIo =require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const publicPath =path.join(__dirname,'../public');


app.use(express.static(publicPath));
var io = socketIo(server);
io.on('connection',(socket)=>{
    console.log('User connected on socket');
    socket.on('disconnect',()=>{

        console.log('User disconnected ');
    });
       io.emit('createMessage',(msg)=>{
        socket.emit('gotYourMessage',{
            f:'Yousof',
            text:'Hello and how are you?',
            date : 123345
        });
        console.log(msg);
    });
});



server.listen(PORT,()=>{
    console.log(`App started on Port : ${PORT}`);
});