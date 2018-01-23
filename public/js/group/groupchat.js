$(document).ready(function(){
    var socket = io();
    
    var room = $('#groupName').val();
    var sender = $('#sender').val();
    
    var userPic = $('#name-image').val();
    
    socket.on('connect', function(){
        var params = {
            room: room,
            name: sender
        };
        socket.emit('join', params, function(){
            //console.log('User has joined this channel');    
        });
    });
    
    socket.on('usersList', function(users){
        var ol = $('<ol></ol>');
        
        for(var i = 0; i < users.length; i++){
            ol.append('<p><a id="val" data-toggle="modal" data-target="#myModal">'+users[i]+'</a></p>');
        }
        
        $(document).on('click', '#val', function(){
            
        });
    });
    
    socket.on('newMessage', function(data){
        var template = $('#message-template').html();
        
    });
})