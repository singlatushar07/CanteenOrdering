import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import foods from "../Data/data";
import FoodItemListing from "../components/FoodItemListing";

export default function CartScreen() {
  const abc = useSelector((state) => state.meals.cart);
  return (
    <View>
      <FoodItemListing data={abc} />
    </View>
  );
}

const styles = StyleSheet.create({});
