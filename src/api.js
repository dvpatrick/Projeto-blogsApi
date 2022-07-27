const express = require('express');
const routes = require('./routes');
// const errorMidle = require('./middlewares/errorMiddle');
// const authMiddle = require('./middlewares/authMiddle');
const errorMiddle = require('./middlewares/errorMiddle');
require('express-async-errors');
// ...

const app = express();

app.use(express.json());

app.post('/login', routes.login);
app.post('/user', routes.registerUser);

// app.use(authMiddle.validateToken);

// app.get('/user', authMiddle.validateToken, routes.getUsers);
app.get('/user', routes.getUsers);
app.get('/user/:id', routes.getById);

app.post('/categories', routes.registerCategory);
app.get('/categories', routes.getAllCategories);
//
app.post('/post', routes.registerPost);
app.get('/post', routes.getAllPost);

app.use(errorMiddle);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
