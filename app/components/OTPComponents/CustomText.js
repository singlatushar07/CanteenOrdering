import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const CustomText = function (props) {
  return (
    <Text {...props} style={[styles.style, props.style]}>
      {props.children}
      {`  `}
    </Text>
  );
};

const styles = StyleSheet.create({
  style: {
    color: colors.black,
  },
});

export default CustomText;
