import React from "react";
import { StyleSheet, Text, View, Button, FlatList, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

export default function OrderSummary({ route }) {
  const listing = route.params;
  console.log(listing);
  const renderItem = (item) => (
    <View style={styles.detailsContainer}>
      {(item.image && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )) || (
        <Image source={require("../assets/burger.jpg")} style={styles.image} />
      )}
      <View style={{ flexDirection: "row-reverse", flex: 1 }}>
        <AppText style={{ paddingRight: 15 }}>
          ₹{item.price * item.quantity}
        </AppText>
        <View style={styles.card}>
          <AppText style={styles.title}>
            {item.title}({item.quantity})
          </AppText>
          <AppText style={styles.price}>₹{item.price}</AppText>
        </View>
      </View>
    </View>
  );
  return (
    <View style={{ paddingLeft: 15 }}>
      <Text
        style={{
          marginTop: 5,
          marginBottom: 5,
          fontSize: 25,
          fontWeight: "bold",
          color: colors.cashGreen,
        }}
      >
        History
      </Text>
      <FlatList
        data={listing}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => renderItem(item)}
      />
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
