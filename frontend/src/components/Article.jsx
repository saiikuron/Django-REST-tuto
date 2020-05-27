import React, { useEffect, useState } from "react";

function Article() {
  const [article, setArticle] = useState({ article: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/r/article");
      const data = await res.json();
      setArticle(data);
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <h3>Article list:</h3>
      <div>
        <h2>{article.title}</h2>
        <p>{article.author}</p>
      </div>
    </div>
  );
}

export default Article;
