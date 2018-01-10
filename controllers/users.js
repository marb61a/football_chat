'use strict';

module.exports = function(_, passport, User){
    return {
        SetRouting: function(router){
            router.get('/', this.indexPage);
        },
        
        indexPage: function(req, res){
            const errors = req.flash('error');
        }
    }; 
};