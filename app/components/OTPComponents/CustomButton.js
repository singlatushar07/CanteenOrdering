import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = function (props) {
  const style = {};

  style.borderWidth = 0;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonStyle,
        style,
        props.buttonStyle,
        props.disabled ? styles.disabled : {},
      ]}
    >
      <Text style={[styles.textStyle, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
  textStyle: {
    textTransform: "uppercase",
    fontSize: 12,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomButton;
