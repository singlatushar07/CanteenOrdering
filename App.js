import React, { useState, useEffect } from "react";
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
import AccountNavigator from "./app/navigation/AccountNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { RotationGestureHandler } from "react-native-gesture-handler";
import jwtDecode from "jwt-decode";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    console.log(token, "retrive");
    if (!token) return;
    setUser(jwtDecode(token));
  };
  useEffect(() => {
    restoreToken();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Provider store={store}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
          {/* <CartScreenNavigator /> */}
          {/* <AuthNavigator /> */}
          {/* <AdminNavigator /> */}
        </NavigationContainer>
      </Provider>
    </AuthContext.Provider>
    // <PaymentSceen />
  );
}
