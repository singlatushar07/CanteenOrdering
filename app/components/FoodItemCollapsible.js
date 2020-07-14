import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";

import AppText from "./AppText";
import Counter from "./Counter";
import colors from "../config/colors";

function FoodItemCollapsible({ foods, category }) {
  const [collapsed, setCollapsed] = useState(true);
  const [icon, setIcon] = useState("caretright");

  const handleCollapse = () => {
    setCollapsed(!collapsed);
    setIcon(collapsed ? "caretdown" : "caretright");
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
          data={foods[category]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.detailsContainer}>
              {item.image && <Image source={item.image} style={styles.image} />}
              <View style={styles.card}>
                <AppText style={styles.title}>{item.title}</AppText>
                <AppText style={styles.price}>₹{item.price}</AppText>
                {item.subTitle && (
                  <AppText numberOfLines={2} style={styles.subTitle}>
                    {item.subTitle}
                  </AppText>
                )}
              </View>
              <Counter />
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
  subTitle: {
    color: colors.medium,
    fontSize: 14,
  },
});

export default FoodItemCollapsible;
