import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleUpdate from "./ArticleUpdate";

function Article() {
  return (
    <BrowserRouter>
      <div className="Article">
        <Switch>
          <Route path="/" exact component={ArticleList} />
          <Route path="/:id" exact component={ArticleUpdate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Article;
