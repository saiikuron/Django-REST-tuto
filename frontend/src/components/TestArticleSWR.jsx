import React from "react";
import useSWR from "swr";
const ArticlesEndpoint = "http://localhost:8000/api/r/article/";

const getData = async () => {
  const response = await fetch(ArticlesEndpoint);
  return await response.json();
};
const TestArticleSWR = () => {
  const { data: articles } = useSWR(ArticlesEndpoint, getData);

  return (
    <div className="container">
      <h3>Article list w/ SWR:</h3>
      {articles &&
        articles.map((article) => {
          return (
            <div className={article.id}>
              <p>
                {article.id} - {article.title}
              </p>
            </div>
          );
        })}
    </div>
  );
};
export default TestArticleSWR;
