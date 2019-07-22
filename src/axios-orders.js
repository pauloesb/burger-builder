import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-890b6.firebaseio.com/"
});

export default instance;
