import React from "react";
import { StyleSheet } from "react-native";

import CustomText from "./CustomText";

const TimerText = (props) => {
  const { text, time } = props;

  return (
    <CustomText style={styles.resendOtpTimerText}>
      {text}
      <CustomText style={styles.textBold}>{" " + time}s</CustomText>
    </CustomText>
  );
};

const styles = StyleSheet.create({
  resendOtpTimerText: {
    fontSize: 13,
    textAlign: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 100,
  },
  textBold: {
    fontWeight: "bold",
  },
});

export default TimerText;
