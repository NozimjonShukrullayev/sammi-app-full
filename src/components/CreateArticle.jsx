import { useState } from "react";
import ArticleForm from "./ArticleForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticlesService from "../service/articles";
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/articles";

function CreateArticle() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      const response = await ArticlesService.postArticle(article);
      dispatch(postArticleSuccess(response.article));
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  }

  const formProp = { title, setTitle, description, setDescription, body, setBody, formSubmit };

  return (
    <div>
      <h1 className="fs-1 text-center">Create article</h1>
      <div className="col-md-8 mx-auto mt-4">
        <ArticleForm {...formProp} />
      </div>
    </div>
  )
}

export default CreateArticle;