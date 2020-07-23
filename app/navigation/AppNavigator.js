import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import ListingsNavigator from "./ListingsNavigator";
import AccountNavigator from "./AccountNavigator";
import routes from "./routes";
import CartScreenNavigator from "./CartScreenNavigator";
import { View, Text } from "react-native";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

function getNum() {
  const data = useSelector((state) => state.meals.cart);
  return data.length;
}

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        height: 60,
      },
    }}
  >
    <Tab.Screen
      name={routes.LISTINGS}
      component={ListingsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreenNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <View>
            <View
              style={{
                position: "absolute",
                fontSize: 8,
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: colors.secondary,
                right: 15,
                bottom: 10,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <Text style={{ fontSize: 10, color: colors.white }}>
                {getNum()}
              </Text>
            </View>
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          </View>
        ),
      }}
    />

    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
