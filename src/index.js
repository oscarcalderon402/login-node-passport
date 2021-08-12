const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const routes = require('./routes');
const morgan = require('morgan');
const db = require('./database');

//INITIALIZATION
const app = express();
db();

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', routes);

//listen
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
