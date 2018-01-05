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
    socket.on('newEmail',()=>{
        console.log('New Email');
    });

    socket.emit('newEmail',{
            from:'y@1.com',
            text:'Hello'
        }
    );

    socket.on('createEmail',(data)=>{
        console.log(data);
    });

    socket.on('createMessage',(msg)=>{
        socket.emit('gotYourMessage','GOt it ');
        console.log(msg);
    });
});



server.listen(PORT,()=>{
    console.log(`App started on Port : ${PORT}`);
});