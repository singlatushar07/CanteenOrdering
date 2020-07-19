import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, removeFromCart } from "../store/actions/mealsaction";

function Counter({ item }) {
  const cartItems = useSelector((state) => state.meals.cart);
  const dispatch = useDispatch();

  const existingIndex = cartItems.findIndex((meal) => meal.id === item.id);
  const [count, setCount] = useState(0);
  if (existingIndex !== -1) setCount(cartItems[existingIndex].quantity);

  const handleDecrement = () => {
    if (count === 0) {
      removeFromCart(item.id);
    } else {
      setCount(count - 1);
    }
  };
  const handleIncrement = () => {
    setCount(count + 1);
    dispatch(increaseQuantity(item.id));
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleDecrement()}>
          <MaterialCommunityIcons
            name="minus"
            size={20}
            color={colors.medium}
          />
        </TouchableOpacity>
        <AppText style={styles.text}>{count}</AppText>
        <TouchableOpacity onPress={() => handleIncrement()}>
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
