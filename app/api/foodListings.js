import client from "./client";

const endpoint = "/menu";

const getFoodItems = (hallNum = "") => client.get(endpoint + "/" + hallNum);
const addFoodListing = (item) => client.post(endpoint, item);
const deleteListing = (id) => client.delete(endpoint + "/" + id);
const updateListing = (id, item) => client.put(endpoint + "/" + id, item);

export default {
  getFoodItems,
  addFoodListing,
  deleteListing,
  updateListing,
};
