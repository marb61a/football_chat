module.exports = function(io, Users){
    const users = new Users;
    
    io.on('connection', (socket) => {
        socket.on('join', (params, callback) => {
            socket.join(params.room);
            users.AddUserData(socket.id, params.name, params.room);
            io.to(params.room).emit('usersList', users.GetUsersList(params.room));
            
            callback();
        });   
    });
};