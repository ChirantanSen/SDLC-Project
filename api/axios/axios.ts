import axios from "axios";
import { Cookies } from "react-cookie";
const adminUrl = "https://freelaunce-job-board.onrender.com/api";
export const baseURL = adminUrl;
const cookies = new Cookies();
const axiosInstance = axios.create({ baseURL });

// jwt Authentication

axiosInstance.interceptors.request.use(
  async function (config) {
    // config is a parameter//
    const token = cookies.get("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default axiosInstance;
