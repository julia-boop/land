require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const cors = require('cors')
const endpointRouter = require('./src/routes/endpointRouter');
const PORT = process.env.PORT || 3001;
const methodOverride =  require('method-override');

app.set('trust proxy', 1) // trust first proxy
app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({secret:'holis'}));
app.use('/endpoints', endpointRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});