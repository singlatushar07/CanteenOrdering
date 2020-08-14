import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import routes from "./routes";
import CartScreen from "../screens/CartScreen";
import PaymentSceen from "../screens/PaymentSceen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Stack = createStackNavigator();

const CartScreenNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name={routes.CART} component={CartScreen} />
    <Stack.Screen name={routes.PAYMENT} component={PaymentSceen} />
    <Stack.Screen
      name={routes.CART}
      component={CartScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={routes.CHECKOUT} component={CheckoutScreen} />
  </Stack.Navigator>
);

export default CartScreenNavigator;
