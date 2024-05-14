import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticlesService from "../service/articles";
import moment from "moment";
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/articles";
import { Loader } from "../ui";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector(state => state.articles);

  const getArticleDetailData = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticlesService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
    }
  };

  useEffect(() => {
    getArticleDetailData();
  }, [slug])

  return (isLoading ? <Loader /> : articleDetail !== null && (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-6 fw-bold">{articleDetail.title}</h1>
        <p className="col-md-8 fs-5">{articleDetail.description}</p>
        <p className="fs-6 text-muted"><span className="fw-bold">Created at:</span> {moment(articleDetail.createdAt).format("DD MMM, YYYY")}</p>
        <div className="col-md-8 bg-white">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis text-uppercase">{articleDetail.author.username}</strong>
              <p className="card-text mb-auto">{articleDetail.author.bio}</p>
            </div>
            <div className="col-auto d-none d-lg-block">
              <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em" className="text-uppercase fs-4">{articleDetail.author.username[0]}</text></svg>
            </div>
          </div>
        </div>
        <p className="col-md-12 fs-6">{articleDetail.body}</p>
      </div>
    </div>
  ))
}

export default ArticleDetail;