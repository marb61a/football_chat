module.exports = function(formidable, Club, aws){
    return {
        setRouting: function(router){
            router.get('');
        },
        
        adminPage: function(req, res){
            res.render('admin/dashboard');
        },
        
        adminPostPage: function(req, res){
            const newClub = new Club();
        }
    }; 
};