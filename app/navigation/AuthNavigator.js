import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import routes from "./routes";
import OTPScreen from "../screens/OTPSceen";
import AppNavigator from "./AppNavigator";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen
      name={routes.WELCOME}
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    <Stack.Screen
      name={routes.FORGET_PASSWORD}
      component={ForgetPasswordScreen}
      options={{
        title: "Forget Password",
      }}
    />
    <Stack.Screen
      name={routes.CHANGE_PASSWORD}
      component={ChangePasswordScreen}
      options={{
        title: "Change Password",
      }}
    />
    <Stack.Screen name={routes.OTP} component={OTPScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
