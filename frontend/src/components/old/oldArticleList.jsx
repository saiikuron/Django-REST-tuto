import React, { useEffect, useState } from "react";

function ArticleList() {
  const [articles, setArticle] = useState({});
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
    <div className="ArticleList">
      <h3>Article list:</h3>
      {isFetched &&
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
}

export default ArticleList;
