module.exports = function(async, Club, Users){
    return {
        SetRouting: function(router){
            router.get('/results', this.getResults);
            router.post('/results', this.postResults);
            
            router.get('/members', this.viewMembers);
            router.post('/members', this.searchMembers);
        },
        
        getResults: function(req, res){
            res.redirect('/home');
        },
        
        postResults: function(req, res){
            async.parallel([
                function(callback){
                    const regex = new RegExp((req.body.country), 'gi');
                }
            ], (err, results) => {
                
            });
        },
        
        viewMembers: function(req, res){
            async.parallel([
                function(callback){
                    
                }    
            ]);
        }
    }; 
};