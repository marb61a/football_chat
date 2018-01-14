module.exports = function(async, Users, Message, FriendResult){
    return {
        SetRouting: function(router){
            router.get('/chat/:name', this.getchatPage);
            router.post('/chat/:name', this.chatPostPage);
        },
        
        getchatPage: function(req, res){
            
        }
    };  
};