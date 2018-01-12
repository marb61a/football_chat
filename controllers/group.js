module.exports = function(Users, async, Message, FriendResult, Group){
    return{
        SetRouting: function(router){
            router.get('');    
        },
        
        groupPage: function(req, res){
            const name = req.params.name;
            
        }
    }; 
};