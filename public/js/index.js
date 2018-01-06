var socket = io();
socket.on('connect',function(){
    console.log('Connected to server');
});
socket.on('disconnect',function () {
    console.log('Disconnected');
});

socket.on ('newMessage',function (data) {
    console.log(data);
});
socket.emit('createMessage',{
    from:'User1',
    text:'I m doing good!'
});
