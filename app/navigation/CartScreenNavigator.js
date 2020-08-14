import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";
import CartScreen from "../screens/CartScreen";
import colors from "../config/colors";
import PaymentSceen from "../screens/PaymentSceen";

const Stack = createStackNavigator();

const CartScreenNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <Stack.Screen name={routes.CART} component={CartScreen} />
    <Stack.Screen name={routes.PAYMENT} component={PaymentSceen} />
  </Stack.Navigator>
);

export default CartScreenNavigator;
