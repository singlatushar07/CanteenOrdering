import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function Counter(props) {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleDecrement}>
          <MaterialCommunityIcons
            name="minus"
            size={20}
            color={colors.medium}
          />
        </TouchableOpacity>
        <AppText style={styles.text}>{count}</AppText>
        <TouchableOpacity onPress={handleIncrement}>
          <MaterialCommunityIcons name="plus" size={20} color={colors.medium} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    borderWidth: 1,
    borderColor: colors.medium,
    borderRadius: 10,
    backgroundColor: colors.light,
    width: 100,
  },
  text: {
    marginHorizontal: 10,
    color: colors.medium,
  },
});

export default Counter;
