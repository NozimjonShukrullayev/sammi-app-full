import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import ArticlesReducer from "../slice/articles";

export default configureStore({ 
  reducer: {
    auth: AuthReducer,
    articles: ArticlesReducer,
  }, 
  devTools: process.env.NODE_ENV !== 'production', 
})