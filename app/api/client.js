import { create } from "apisauce";
import url from "../keys/url";

const apiClient = create({
  baseURL: url.ngrokurl,
});

// const getFood = () => apiClient.get("/menu");
export default apiClient;
