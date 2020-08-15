import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";
import AccountDetails from "../screens/AccountDetailsScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    <Stack.Screen
      name={routes.ACCOUNT_DETAILS}
      component={AccountDetails}
      options={{
        title: "Account Details",
      }}
    />
    <Stack.Screen
      name={routes.ORDER_HISTORY}
      component={OrderHistoryScreen}
      options={{
        title: "Order History",
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
