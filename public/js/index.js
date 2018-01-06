var socket = io();
socket.on('connect',function(){
    console.log('Connected to server');
});
socket.on('disconnect',function () {
    console.log('Disconnected');
});

socket.on ('newMessage',function (data) {
    console.log(data);
    var li = jQuery('<li></li>')
    li.text(`${data.from}:${data.text}`);
    jQuery('#messages').append(li);
});
socket.emit('createMessage',{
    from:'User1',
    text:'I m doing good!'
},function (ack) {
    console.log('Got it' + ack);
});

jQuery('#chat-message').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage',{
            from:'JQuery',
            text:jQuery('[name=message]').val()
    },function(ack){

        }
    );
});
