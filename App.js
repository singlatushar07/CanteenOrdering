import React, { useEffect, useState } from "react";
import { View, TabBarIOS } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import AppImageInput from "./app/components/AppImageInput";
import AppImageInputSingle from "./app/components/AppImageInputListSingle";
import ListingScreen from "./app/screens/ListingScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import Counter from "./app/components/Counter";
import FoodItemListing from "./app/components/FoodItemListing";
import Screen from "./app/components/Screen";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./app/store/reducers/meals";
import AdminAdder from "./app/screens/AdminAdder";
import AdminNavigator from "./app/navigation/AdminNavigator";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    // <Provider store={store}>
    //   <NavigationContainer theme={navigationTheme}>
    //     <AppNavigator />
    //     {/* <AuthNavigator /> */}
    //     {/* <AdminNavigator /> */}
    //   </NavigationContainer>
    // </Provider>
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <AdminNavigator />
      </NavigationContainer>
    </Provider>
  );
}
