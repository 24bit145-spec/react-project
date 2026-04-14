import axios from "axios";
import { API_URL } from "../config";

// axios instance
const api = axios.create({
  baseURL: API_URL,
});

// request interceptor (token add பண்ண)
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default api;