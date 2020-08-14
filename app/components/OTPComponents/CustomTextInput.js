import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const CustomTextInput = function (props) {
  const {
    LeftComponent,
    RightComponent,
    refCallback,
    ...remainingProps
  } = props;

  return (
    <View style={styles.containerStyle}>
      {LeftComponent}
      <TextInput
        {...remainingProps}
        style={styles.textInputStyle}
        ref={refCallback}
      />
      {RightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 12,
    flex: 1,
  },

  textInputStyle: {
    padding: 0,
    flex: 1,
    fontSize: 18,
    width: "100%",
    textAlign: "center",
  },
});

CustomTextInput.defaultProps = {
  LeftComponent: <></>,
  RightComponent: <></>,
};

export default CustomTextInput;
