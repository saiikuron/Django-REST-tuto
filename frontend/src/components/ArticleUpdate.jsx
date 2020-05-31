import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ArticleUpdate({ match }) {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const updateArticle = () => {
    const data = { title, author };
    axios
      .put(`http://localhost:8000/api/r/article/16/`, data)
      .then((res) => {});
  };

  //   (`http://localhost:8000/api/r/article/${match.id}`)

  const getArticle = () => {
    return axios.get(`http://localhost:8000/api/r/article/16`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
    });
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="AddArticle">
      <Form onSubmit={updateArticle}>
        <Form.Group controlId="formAddArticleTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            defaultValue={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAddArticleAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            defaultValue={author}
            onChange={(evt) => setAuthor(evt.target.value)}
          />
        </Form.Group>

        <Button className="float-right" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </div>
  );
}

export default ArticleUpdate;
