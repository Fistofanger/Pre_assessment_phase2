require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const removeHeaders = require('./middleware/removeHeaders');
const ssr = require('./middleware/ssr');
const verifyAccessToken = require('./middleware/verifyJWT');

const app = express();
const indexRouter = require('./routes/index.router');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(removeHeaders);
app.use(ssr);
app.use(cookieParser()); 
app.use(verifyAccessToken);
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`наш сервер работает на порте ${PORT}`);
});


