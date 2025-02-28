import React, { useState } from "react";
import { useContext } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";
import authStorage from "../auth/storage";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppErrorMessage,
} from "../components/forms";
import Spinner from "react-native-loading-spinner-overlay";
import AuthContext from "../auth/context";
import authApi from "../api/auth";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [loginFailed, SetLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (userDetails) => {
    setLoading(true);
    console.log(JSON.stringify(userDetails));
    const response = await authApi.loginUser(JSON.stringify(userDetails));
    console.log(response);
    setLoading(false);
    if (!response.ok) {
      setErrorMessage(response.data);
      return SetLoginFailed(true);
    }
    const userData = response.data;
    SetLoginFailed(false);
    const user = jwtDecode(userData);
    authContext.setUser(user);
    console.log(user);
    authStorage.storeToken(userData);
  };

  return (
    <Screen style={styles.container}>
      <Spinner
        visible={loading}
        size="large"
        animation="fade"
        cancelable={true}
      />
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppErrorMessage error={errorMessage} visible={loginFailed} />
        <SubmitButton title="Login" />
      </AppForm>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.FORGET_PASSWORD)}
      >
        <AppText style={styles.forgetPassword}>Forgot Password</AppText>
      </TouchableOpacity>
      <View style={{ position: "absolute", bottom: 10, right: 10 }}>
        <AppText>Contact Us</AppText>
        <Text>tusharsi@iitk.ac.in</Text>
        <Text>yatishg@iitk.ac.in</Text>
        <Text>nikhilme@iitk.ac.in</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  forgetPassword: {
    color: colors.primary,
    textAlign: "center",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
