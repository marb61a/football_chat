module.exports = function(async, Users, Message, aws, formidable, FriendResult){
    return{
        SetRouting: function(router){
            router.get('/settings/profile', this.getProfilePage);
            
            router.post('/userupload', aws.Upload.any(), this.userUpload);
            router.post('/settings/profile', this.postProfilePage);
            
            router.get('/profile/:name', this.overviewPage);
            router.post('/profile/:name', this.overviewPostPage);
        },
        
        getProfilePage: function(req, res){
            async.parallel([
                function(callback){
                    Users.findOne({'username': req.user.username})
                        .populate('request.userID')
                        .exec((err, result) => {
                            callback(err, result);
                        });
                }
            ]);
        }
    }; 
};