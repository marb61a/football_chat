$(document).ready(function(){
    var socket = io();
    
    var room = $('#groupName').val();
    var sender = $('#sender').val();
    
    socket.on('connect', function(){
        var params = {
            sender: sender
        };
        
        socket.emit('joinRequest', params, function(){
            //console.log('Joined');
        });
    });
    
    socket.on('newFriendRequest', function(){
        $('#reload').load(location.href + ' #reload');
        
        $(document).on('click', '#accept_friend', function(){
            var senderId = $('#senderId').val();
            var senderName = $('#senderName').val();
            
            S.ajax({
                url: '/group/'+room,
                type: 'POST',
                data: {
                    senderId: senderId,
                    senderName: senderName
                },
                success: function(){
                    $(this).parent().eq(1).remove();
                }
            });
            
            $('#reload').load(location.href + ' #reload');
        });
    });
})