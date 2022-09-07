const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const mainRouter = require('./src/routes/mainRouter');
const PORT = process.env.PORT || 3001;


app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});