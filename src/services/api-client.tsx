import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ab413cb4c51d44a1b8927ef68999d539",
  },
});
