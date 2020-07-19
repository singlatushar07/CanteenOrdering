import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <Stack.Screen
      name={routes.LISTING}
      component={ListingScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{
        title: "",
      }}
    />
  </Stack.Navigator>
);

export default ListingsNavigator;
