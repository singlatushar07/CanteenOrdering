import React from "react";
import { StyleSheet, View, Image, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Counter from "../components/Counter";

export default function CartScreen() {
  const data = useSelector((state) => state.meals.cart);
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].price * data[i].quantity;
  }
  return (
    <Screen style={{ padding: 5, paddingTop: 5 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            {item.image && <Image source={item.image} style={styles.image} />}
            <View style={styles.card}>
              <AppText style={styles.title}>{item.title}</AppText>
              <AppText style={styles.price}>₹{item.price}</AppText>
            </View>
            <Counter item={item} />
          </View>
        )}
      />
      <AppText>Total: {total}</AppText>
      <Button onPress={() => console.log(data)} title="Log"></Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
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
});
