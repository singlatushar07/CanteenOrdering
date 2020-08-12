import client from "./client";

const endpoint = "/menu";

const getFoodItems = (hallNum) => client.get(endpoint + "/" + hallNum);

export default {
  getFoodItems,
};
