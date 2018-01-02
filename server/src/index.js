import 'babel-polyfill';
import express from 'express';
import React from 'react';
import renderer from './helpers/renderer.js';
import createStore from './helpers/createStore.js';
import Routes from './client/Routes';
import { matchRoutes } from 'react-router-config';
const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  const components = matchRoutes(Routes, req.path);

  const html = renderer(req, store);
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
