var express = require('express-load');
var bodyParser = require('body-parser');
var home = require('../app/routes/home');

module.exports = function () {
    var app = express();
    app.set('port', 3000);

    app.use(express.static('/public'));

    app.set('public', './public');
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    
    home(app);

    return app;

};


