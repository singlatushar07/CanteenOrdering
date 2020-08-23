import client from "./client";

const endpoint = "/menu";
const endpoint2 = "/history";

const getFoodItems = (hallNum = "") => client.get(endpoint + "/" + hallNum);
const addFoodListing = (item) => client.post(endpoint, item);
const deleteListing = (id) => client.delete(endpoint + "/" + id);
const updateListing = (id, item) => client.put(endpoint + "/" + id, item);
const getHistory = (id) => client.get(endpoint2 + "/" + id);

export default {
  getFoodItems,
  addFoodListing,
  deleteListing,
  updateListing,
  getHistory,
};
