import { create } from "apisauce";
import ngrokUrl from "../keys/url";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: ngrokUrl.ngrokUrl,
});
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};
export default apiClient;
