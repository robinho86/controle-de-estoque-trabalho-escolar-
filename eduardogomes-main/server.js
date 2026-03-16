require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

const routers = require('./routers');
const {middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());



app.use(router);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});