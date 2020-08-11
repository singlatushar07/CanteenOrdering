import React from "react";
import { FlatList } from "react-native";

import FoodItemCollapsible from "./FoodItemCollapsible";

function FoodItemListing({ data, ...otherProps }) {
  return (
    <FlatList
      data={["Snacks", "Veg", "NonVeg"]}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <FoodItemCollapsible category={item} foods={data} />
      )}
      {...otherProps}
    />
  );
}

export default FoodItemListing;
