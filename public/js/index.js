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
jQuery('#chat-message').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage',{
            from:'JQuery',
            text:jQuery('[name=message]').val()
    },function(ack){
        }
    );
});
var locationButton = jQuery('#location');

locationButton.on('click',function (e) {
            if (!navigator.geolocation)
                alert('Not supported in this browser');

            navigator.geolocation.getCurrentPosition(function (position){
                    socket.emit('newLocationMessage',{
                            latitude:position.coords.latitude,
                            longitude:position.coords.longitude
                    });
            },function (err) {
                alert('Not provided');
            } );
});
