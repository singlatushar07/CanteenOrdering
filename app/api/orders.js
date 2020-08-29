import client from "./client";

const history = "user/history";

const getHistory = (userId) => client.get(history + "/" + userId);
const placeOrder = (orderDetails) => client.post(history, orderDetails);

export default {
  getHistory,
  placeOrder,
};
