import axios from "axios";

// Create a new Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json", // set your desired headers here
  },
});

export default api;
