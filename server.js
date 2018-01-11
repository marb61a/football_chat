const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');
const socketIO = require('socket.io');
const {Users} = require('./helpers/UsersClass');
const {Global} = require('./helpers/Global');
const compression = require('compression');
const helmet = require('helmet');

const container = require("./container");

container.resolve(function(users, _, admin){
    mongoose.Promise = global.Promise;
    mongoose.connect("");
    
    const app = SetupExpress();
    
    function SetupExpress(){
        const app = express();
        
    }
});
