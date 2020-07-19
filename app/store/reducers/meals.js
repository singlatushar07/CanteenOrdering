import foods from "../../Data/data";
import { ADD_TO_CART } from "../actions/mealsaction";

const initialstate = {
  meals: foods,
  cart: [],
};
const mealsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingIndex = state.cart.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart.splice(existingIndex, 1);
        return { ...state, cart: updatedCart };
      } else {
        const category = action.mealId.replace(/[0-9]/g, "");
        return {
          ...state,
          cart: state.cart.concat(
            state.meals[category].find((meal) => meal.id === action.mealId)
          ),
        };
      }
    default:
      return state;
  }
};

export default mealsReducer;
