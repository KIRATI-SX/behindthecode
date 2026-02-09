import { API } from "@/config/api";
import axios from "axios";

const axiosInstance = axios.create({
  // You can set baseURL or other global axios settings here if needed
  baseURL: API.BASE_URL,
  timeout: 10000,
});

export default axiosInstance;