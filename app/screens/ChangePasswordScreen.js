import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import AppText from "../components/AppText";
import {
  AppForm,
  AppFormField,
  AppErrorMessage,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(8).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function ChangePasswordScreen(props) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (email) => {
    setLoading(true);
    const response = await authApi.forgetPassword(email);
    setLoading(false);
    if (response.ok) {
      setError(false);
      navigation.navigate(routes.OTP, response.data);
    } else {
      setError(response.data);
    }
    console.log(response.data);
  };
  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        size="large"
        animation="fade"
        cancelable={true}
      />
      <AppText style={styles.text}>Enter new password</AppText>
      <AppForm
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />
        <AppErrorMessage error={error} visible={error} />
        <SubmitButton title="Continue" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  text: {
    color: colors.dark,
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    marginBottom: 10,
  },
});

export default ChangePasswordScreen;
