const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const cors = require('cors')
const mainRouter = require('./src/routes/mainRouter');
const endpointRouter = require('./src/routes/endpointRouter');
const PORT = process.env.PORT || 3001;
const methodOverride =  require('method-override');
const createLocals = require('./src/middlewares/createLocals')

app.set('view engine', 'ejs');
app.set('trust proxy', 1) // trust first proxy
app.set('views', path.join(__dirname, './src/views'));
app.use(cors())
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({secret:'holis'}));
app.use(createLocals)
app.use('/', mainRouter);
app.use('/endpoints', endpointRouter);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});