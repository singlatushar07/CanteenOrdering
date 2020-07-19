export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";

export const addToCart = (id) => {
  return { type: ADD_TO_CART, mealId: id };
};

export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, mealId: id };
};

export const increaseQuantity = (id) => {
  return { type: INCREASE_QUANTITY, mealId: id };
};
