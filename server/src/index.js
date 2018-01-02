import express from 'express';
import React from 'react';
import renderer from './helpers/renderer.js';
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = renderer(req);
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
