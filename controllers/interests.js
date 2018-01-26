module.exports = function(async, Users, Message, FriendResult){
    return{
        SetRouting: function(router){
            router.get('/settings/interests', this.getInterestPage);
            router.post('/settings/interests', this.postInterestPage);    
        },
        
        getInterestPage: function(req, res){
            async.parallel([
                function(callback){
                    Users.findOne({'username': req.user.username})
                        .populate('request.userId')
                        .exec((err, result) => {
                            callback(err, result);
                        });
                }, function(callback){
                    const nameRegex = new RegExp("^" + req.user.username.toLowerCase(), "i");
                    Message.aggregate(
                        {$match:{$or:[
                            {"senderName":nameRegex}, {"receiverName":nameRegex}    
                        ]}},
                        {$sort:{"createdAt":-1}},
                        {
                            $group:{"_id":{
                                
                            }}
                        }
                    );
                }
            ]);
        }
    };    
};