module.exports = function(async, Club, _, Users, Message, FriendResult){
    return {
        SetRouting: function(router){
            router.get('/home', this.homePage);
            router.post('/home', this.postHomePage);
            
            router.get('/logout', this.logout);
        },
        
        homePage: function(req, res){
            async.parallel([
                function(callback){
                    Club.find({}, (err, result) => {
                        callback(err, result);
                    });
                },
                
                function(callback){
                    Club.aggregate({
                        $group:{
                            _id: "$country"
                        }
                    }, (err, newResult) => {
                        callback(err, newResult) ;
                    });
                },
                
                function(callback){
                    Users.findOne({'username': req.user.username})
                        .populate('request.userId')
                        .exec((err, result) => {
                            callback(err, result);
                        });
                },
                
                function(callback){
                    const nameRegex = new RegExp("^" + req.user.username.toLowerCase(), "i");
                    
                    Message.aggregate(
                        {$match:{$or:[
                            {"senderName":nameRegex},
                            {"receiverName":nameRegex}
                        ]}},
                        {$sort:{"createdAt":-1}},
                        {
                            
                        }
                    );
                }
            ]);
        }
    }; 
};