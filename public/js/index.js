// var socket = io();
// socket.on('connect',function(){
//     console.log('User connected');
//
//     socket.emit('createEmail', {
//             from:'Y',
//             text :'How are you'
//     });
//
//     socket.emit('createMessage','Hello');
// });
//
// socket.on('disconnect',function(){
//     console.log('Bye');
// });
//
// socket.on('newEmail',function (data) {
//     console.log( data );
// });

 var socket = io();
socket.on('connect',function(){

    console.log('Connected to server');
    socket.emit('createMessage','hello');

});
socket.on('disconnect',function () {
    console.log('Disconnected');
});
socket.emit('createMessage','Hello from create email');


socket.on ('gotYourMessage',function (data) {
    console.log(data);
});