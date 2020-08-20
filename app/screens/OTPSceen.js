import React, { useState, useRef, useEffect } from "react";
import url from "../keys/url";
import { useContext } from "react";
import { Platform, StatusBar, SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import CustomButton from "../components/OTPComponents/CustomButton";
import TimerText from "../components/OTPComponents/TimerText";
import CustomTextInput from "../components/OTPComponents/CustomTextInput";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import authApi from "../api/auth";

console.disableYellowBox = false;
const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
let resendOtpTimerInterval;
var IsUserVerified;

let verifyOTP = async (OTPDetails) => {
  const response = await authApi.sendOTP(JSON.stringify(OTPDetails));
  return response.data;
};

let resendotp = async (c) => {
  const response = await authApi.resendOTP(JSON.stringify(c));
  console.log(response.data);
};

function OtpVerification({ route }) {
  const authContext = useContext(AuthContext);
  const userData = route.params;
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isVerified) {
      authContext.setUser(IsUserVerified);
      console.log("success");
      clearTimeout(interval);
    }
    return () => clearTimeout(interval);
  }, [isVerified]);

  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const isAndroid = Platform.OS === "android";
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT
  );

  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const refCallback = (textInputRef) => (node) => {
    textInputRef.current = node;
  };

  const onOtpChange = (index) => {
    return (value) => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== "") {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        }
      }
    };
  };

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  const onResendOtpButtonPress = () => {
    // clear last OTP
    if (firstTextInputRef) {
      setOtpArray(["", "", "", ""]);
      firstTextInputRef.current.focus();
    }

    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    resendotp({ id: userData._id });
  };
  const onSubmitButtonPress = async () => {
    // API call
    const num = otpArray[0] + otpArray[1] + otpArray[2] + otpArray[3];

    IsUserVerified = await verifyOTP({ id: userData._id, otp: parseInt(num) });
    if (IsUserVerified.isVerified) setIsVerified(true);
    else {
      alert("Incorrect OTP");
      setOtpArray(["", "", "", ""]);
      firstTextInputRef.current.focus();
    }
  };

  const onOtpKeyPress = (index) => {
    return ({ nativeEvent: { key: value } }) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === "Backspace" && otpArray[index] === "") {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        }
        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ""; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.whiteBackgroundContainer}>
        <View style={styles.container}>
          <AppText style={styles.text}>
            Enter OTP send to your email address.
          </AppText>
          <View style={styles.container2}>
            {[
              firstTextInputRef,
              secondTextInputRef,
              thirdTextInputRef,
              fourthTextInputRef,
            ].map((textInputRef, index) => (
              <CustomTextInput
                value={otpArray[index]}
                onKeyPress={onOtpKeyPress(index)}
                onChangeText={onOtpChange(index)}
                keyboardType={"numeric"}
                maxLength={1}
                autoFocus={index === 0 ? true : undefined}
                refCallback={refCallback(textInputRef)}
                key={index}
              />
            ))}
          </View>
          {resendButtonDisabledTime > 0 ? (
            <TimerText text={"Resend OTP in"} time={resendButtonDisabledTime} />
          ) : (
            <CustomButton
              text={"Resend OTP"}
              buttonStyle={styles.otpResendButton}
              textStyle={styles.otpResendButtonText}
              onPress={onResendOtpButtonPress}
            />
          )}
          <AppButton title="Log" onPress={onSubmitButtonPress} />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },

  otpResendButton: {
    alignItems: "center",
    width: "100%",
    marginTop: 16,
    marginBottom: 100,
  },
  otpResendButtonText: {
    color: "#fe7d32",
    textTransform: "none",
    textDecorationLine: "underline",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  text: {
    color: colors.dark,
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
  whiteBackgroundContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
export default OtpVerification;
