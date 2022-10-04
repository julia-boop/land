const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const mainRouter = require('./src/routes/mainRouter');
const PORT = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});