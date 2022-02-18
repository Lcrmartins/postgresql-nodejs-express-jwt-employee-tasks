const routes = require('./routes');

const express = require('express');

const app = express();

app.use(express.json());

app.use(routes);

// http://127.0.0.1:8080
app.listen(8080, () => console.log('Server listening on port 8080'));


