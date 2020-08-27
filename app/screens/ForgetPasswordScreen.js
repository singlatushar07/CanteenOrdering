import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import {
  AppForm,
  AppFormField,
  AppErrorMessage,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function ForgetPasswordScreen({ navigation }) {
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
      <AppText style={styles.text}>
        Please enter your registered email address
      </AppText>
      <AppForm
        initialValues={{ email: "" }}
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

export default ForgetPasswordScreen;
