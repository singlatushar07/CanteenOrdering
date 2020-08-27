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
import authApi from "../api/auth";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(8).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function ChangePasswordScreen({ route, navigation }) {
  const response = route.params;
  const userData = response.data;
  const token = response.headers["x-auth-token"];
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    const response = await authApi.changePassword({
      id: userData._id,
      token: token,
      newPassword: values.password,
    });
    setLoading(false);
    if (response.ok) {
      setError(false);
      alert(response.data);
      navigation.navigate(routes.LOGIN);
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
        onSubmit={(values) => handleSubmit(values)}
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
