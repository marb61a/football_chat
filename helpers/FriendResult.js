module.exports = function(async, Users, Message){
    return{
        PostRequest: function(req, res, url){
            async.parallel([
                function(callback){
                    if(req.body.receiverName){
                        Users.update({
                            'username': req.body.receiverName,
                            'request.userId': {$ne: req.user._id},
                            'friendsList.friendId': {$ne: req.user._id}
                        }, {
                            $push: {request: {
                                userId: req.user._id,
                                username: req.user.username
                            }},
                            $inc: {totalRequest: 1}
                        }, (err, count) => {
                            callback(err, count);
                        });
                    }
                }    
            ]);
        }    
    };
};