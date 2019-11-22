const express = require('express');
const parser = require('body-parser');
const router = require('./routes.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(parser.json());
app.use(express.static('./client/dist'));
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));