import { create } from "apisauce";
import url from "../keys/url";

const apiClient = create({
  baseURL: url.ngrokurl,
});

export default apiClient;
