import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = "http://192.168.99.100:3000/api";

axios.interceptors.request.use(config => {
  const token = getItem("token");
  const authorization = token ? `Token ${token}` : '';
  config.headers.Authorization = authorization;
  return config;
})

export default axios;