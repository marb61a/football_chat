class Users {
    constructor(){
        this.users = [];
    }
    
    AddUserData(id, name, room){
        var users = {id, name, room};
        this.users.push(users);
        return users;
    }
    
    RemoveUser(id){
        var user = this.GetUser(id);
        if(user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    
    GetUser(id){
        
    }
}

module.exports = {Users};