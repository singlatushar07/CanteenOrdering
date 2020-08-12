import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./app/store/reducers/meals";
import AdminNavigator from "./app/navigation/AdminNavigator";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
        {/* <AuthNavigator /> */}
        {/* <AdminNavigator /> */}
      </NavigationContainer>
    </Provider>
  );
}
