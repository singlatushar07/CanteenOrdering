import foods from "../../Data/data";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/mealsaction";

const initialstate = {
  meals: foods,
  cart: [],
};
const mealsReducer = (state = initialstate, action) => {
  let existingIndex = 0;
  let updatedCart = [];
  switch (action.type) {
    case ADD_TO_CART:
      existingIndex = state.cart.findIndex(
        (meal) => meal._id == action.foodItem._id
      );
      if (existingIndex !== -1) return { ...state };
      // const category = action.mealId.replace(/[0-9]/g, "");
      // const newItem = state.meals.find((meal) => meal.id == action.mealId);
      const newItem = action.foodItem;
      newItem["quantity"] = 1;
      return {
        ...state,
        cart: state.cart.concat(newItem),
      };

    case DECREASE_QUANTITY:
      existingIndex = state.cart.findIndex(
        (meal) => meal._id === action.mealId
      );
      updatedCart = [...state.cart];
      updatedCart[existingIndex].quantity -= 1;
      return { ...state, cart: updatedCart };

    case INCREASE_QUANTITY:
      existingIndex = state.cart.findIndex(
        (meal) => meal._id === action.mealId
      );
      updatedCart = [...state.cart];
      updatedCart[existingIndex].quantity += 1;
      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      existingIndex = state.cart.findIndex(
        (meal) => meal._id === action.mealId
      );
      updatedCart = [...state.cart];
      updatedCart.splice(existingIndex, 1);
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export default mealsReducer;
