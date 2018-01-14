module.exports = function(async, Club, _, Users, Message, FriendResult){
    return {
        SetRouting: function(router){
            router.get('/home', this.homePage);
            router.post('/home', this.postHomePage);
            
            router.get('/logout', this.logout);
        },
        
        homePage: function(req, res){
            
        }
    }; 
};