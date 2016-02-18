// view engine setup
var swig = require('swig');
app.set('views', path.join(__dirname, 'views'));
app.set('engine', swig.renderFile);
app.set('view engine', 'html');
