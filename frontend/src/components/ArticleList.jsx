import React from "react";
import useSWR from "swr";
import axios from "axios";
import { Link } from "react-router-dom";

import AddArticle from "./AddArticle";

const ArticlesEndpoint = "http://localhost:8000/api/r/article/";

const getData = () => {
  return axios.get(ArticlesEndpoint).then((res) => {
    return res.data;
  });
};

export const ArticleList = () => {
  const { data: articles } = useSWR(ArticlesEndpoint, getData);

  return (
    <div className="ArticleList">
      <AddArticle /> <br />
      <h3>Article list:</h3>
      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id}>
              <p>
                {article.id} -{" "}
                <Link to={`/${article.id}`}>{article.title}</Link>,{" "}
                {article.author}
              </p>
            </div>
          );
        })}
    </div>
  );
};
