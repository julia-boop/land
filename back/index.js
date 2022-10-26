const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const mainRouter = require('./src/routes/mainRouter');
const PORT = process.env.PORT || 3001;
const methodOverride =  require('method-override');
const createLocals = require('./src/middlewares/createLocals')

app.set('view engine', 'ejs');
app.set('trust proxy', 1) // trust first proxy
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
  secret: 'miafloki',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(createLocals)
app.use('/', mainRouter);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});