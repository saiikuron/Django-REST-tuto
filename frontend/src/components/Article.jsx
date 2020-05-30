import React, { useEffect, useState } from "react";

function Article() {
  const [articles, setArticle] = useState({ article: [] });
  const [isFetched, setFetch] = useState(false);

  const fetchData = async () => {
    const res = await fetch("http://localhost:8000/api/r/article/");
    const data = await res.json();
    setArticle(data);
    setFetch(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {isFetched &&
        articles.map((article) => {
          return (
            <div className={article.id}>
              <h3>{article.title}</h3>
              <p>{article.author}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Article;
