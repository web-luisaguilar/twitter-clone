'use strict';

const port = 3003;
const { json } = require('express');
const express = require('express');
const app = express();

const serverInfo = require('./info');
const NotFound = require('./src/NotFound');

app.use(json());

app.get('/', (req, res) => {
  res.send(serverInfo);
});
app.get('/admin', (req, res) => {
  res.send('Admin');
});

app.use((error, res) => {
  let message = NotFound(error);
  res.send({ err: message });
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
