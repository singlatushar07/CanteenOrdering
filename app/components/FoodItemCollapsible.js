import React, { useState } from "react";
import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";

import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/mealsaction";
import AppText from "./AppText";
import colors from "../config/colors";

function search(nameKey, myArray) {
  var a = new Array();
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].category === nameKey) {
      a.push(myArray[i]);
    }
  }
  return a;
}

function FoodItemCollapsible({ foods, category }) {
  const [collapsed, setCollapsed] = useState(true);
  const [icon, setIcon] = useState("caretright");
  const items = search(category, foods);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setIcon(collapsed ? "caretdown" : "caretright");
  };

  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));

    Alert.alert("Success", "Item added to cart.");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCollapse}>
        <View style={styles.header}>
          <AntDesign name={icon} color={colors.primary} size={20} />
          <AppText style={styles.category}>{category}</AppText>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <FlatList
          data={items}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <View style={styles.detailsContainer}>
              {(item.image && (
                <Image source={item.image} style={styles.image} />
              )) || (
                <Image
                  source={require("../assets/burger.jpg")}
                  style={styles.image}
                />
              )}

              <View style={styles.card}>
                <TouchableOpacity onPress={() => addToCartHandler(item)}>
                  <AppText style={styles.title}>{item.title}</AppText>
                  <AppText style={styles.price}>₹{item.price}</AppText>
                </TouchableOpacity>
                {item.description && (
                  <AppText numberOfLines={2} style={styles.description}>
                    {item.description}
                  </AppText>
                )}
              </View>
            </View>
          )}
        />
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 10,
  },
  detailsContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  image: {
    borderRadius: 15,
    height: 70,
    marginRight: 10,
    width: 70,
  },
  price: {
    color: colors.secondary,
    fontSize: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: colors.medium,
    fontSize: 14,
  },
});

export default FoodItemCollapsible;
