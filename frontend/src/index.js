import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import TestArticleSWR from "./components/TestArticleSWR";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <br />
    <ArticleList />
    <br />
    <TestArticleSWR />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
