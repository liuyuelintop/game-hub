import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: `92e6966d9f644a7ba383d84822a07e25`,
  },
});
