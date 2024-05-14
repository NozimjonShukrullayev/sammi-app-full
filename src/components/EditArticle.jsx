import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArticlesService from "../service/articles";
import { putArticleFailure, putArticleStart, putArticleSuccess } from "../slice/articles";
import ArticleForm from "./ArticleForm";

function EditArticle() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(putArticleStart());
    try {
      await ArticlesService.putArticle(slug, article);
      dispatch(putArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(putArticleFailure());
    }
  }

  useEffect(() => {
    const getArticleDetail = async () => {
      try {
        const response = await ArticlesService.getArticleDetail(slug);
        setTitle(response.article.title);
        setDescription(response.article.description);
        setBody(response.article.body);
      } catch (error) {
        console.log("Error");
      }
    }

    getArticleDetail();
  }, [])

  const formProp = { title, setTitle, description, setDescription, body, setBody, formSubmit };

  return (
    <div>
      <h1 className="fs-1 text-center">Edit article</h1>
      <div className="col-md-8 mx-auto mt-4">
        <ArticleForm {...formProp} />
      </div>
    </div>
  )
}

export default EditArticle;