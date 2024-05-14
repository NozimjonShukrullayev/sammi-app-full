import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
}

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    },
    getArticlesFailure: (state, action) => {
      state.error = action.payload;
    },
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailure: (state) => {
      state.isLoading = false;
      state.error = "Error";
    },
    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: (state, action) => {
      state.articles.push(action.payload);
      state.isLoading = false;
    },
    postArticleFailure: (state) => {
      state.error = "Error";
      state.isLoading = false;
    },
    putArticleStart: (state) => {
      state.isLoading = true;
    },
    putArticleSuccess: (state) => {
      state.isLoading = false;
    },
    putArticleFailure: (state) => {
      state.error = "Error";
      state.isLoading = false;
    },
  },
});

export const { 
  getArticlesStart, 
  getArticlesSuccess, 
  getArticlesFailure, 
  getArticleDetailStart, 
  getArticleDetailSuccess, 
  getArticleDetailFailure,
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
  putArticleStart,
  putArticleSuccess,
  putArticleFailure,
} = articlesSlice.actions;
export default articlesSlice.reducer;