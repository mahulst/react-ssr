import "babel-polyfill";
import express from "express";
import proxy from "express-http-proxy";
import React from "react";
import renderer from "./helpers/renderer.js";
import createStore from "./helpers/createStore.js";
import Routes from "./client/Routes";
import { matchRoutes } from "react-router-config";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator: opts => {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  const components = matchRoutes(Routes, req.path);

  const promises = components.map(({ route }) => {
    if (route.loadData) {
      return route.loadData(store);
    }
  });

  Promise.all(promises).then(() => {
    const html = renderer(req, store);
    res.send(html);
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
