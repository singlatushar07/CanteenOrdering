import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./app/store/reducers/meals";
import AdminNavigator from "./app/navigation/AdminNavigator";
import OTPScreen from "./app/screens/OTPSceen";
import AccountScreen from "./app/screens/AccountScreen";
import AccountDetails from "./app/screens/AccountDetailsScreen";
import PaymentSceen from "./app/screens/PaymentSceen";
import CartScreenNavigator from "./app/navigation/CartScreenNavigator";
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
        {/* <CartScreenNavigator /> */}
        {/* <AuthNavigator /> */}
        {/* <AdminNavigator /> */}
      </NavigationContainer>
    </Provider>
    // <PaymentSceen />
  );
}
