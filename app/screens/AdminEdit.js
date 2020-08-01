import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import foods from "../Data/data";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

function AdminEdit() {
  const ItemList = (category) => (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="caretright" color={colors.primary} size={20} />
        <AppText style={styles.category}>{category}</AppText>
      </View>
      <Collapsible collapsed={false}>
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
              <MaterialCommunityIcons name="dots-vertical" size={35} />
            </View>
          )}
        />
      </Collapsible>
    </View>
  );
  return (
    <Screen>
      <FlatList
        data={Object.keys(foods)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => ItemList(item)}
      />
    </Screen>
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

export default AdminEdit;
