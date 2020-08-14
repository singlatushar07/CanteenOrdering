import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Counter from "../components/Counter";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import { ListItemSeparator } from "../components/lists";

export default function CartScreen({ navigation }) {
  const data = useSelector((state) => state.meals.cart);
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].price * data[i].quantity;
  }
  const hallInfo = data[0] ? data[0].hall : null;
  return (
    <>
      {hallInfo && (
        <Screen style={{ padding: 5, paddingTop: 10 }}>
          <View style={styles.hall}>
            <Image
              source={require("../assets/hostel.jpg")}
              style={styles.image}
            />
            <View style={styles.card}>
              <AppText style={styles.hallTitle}>Hall {hallInfo}</AppText>
            </View>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.container}>
                {(item.image && (
                  <Image source={item.image} style={styles.image} />
                )) || (
                  <Image
                    source={require("../assets/burger.jpg")}
                    style={styles.image}
                  />
                )}
                <View style={styles.card}>
                  <AppText style={styles.title}>{item.title}</AppText>
                  <AppText style={styles.price}>₹{item.price}</AppText>
                </View>
                <Counter item={item} />
              </View>
            )}
          />
          <AppText>Total: {total}</AppText>
          <AppButton
            onPress={() => navigation.navigate(routes.CHECKOUT)}
            title="Checkout"
          />
        </Screen>
      )}
      {!hallInfo && (
        <View style={styles.empty}>
          <AppText style={styles.emptyText}>Your Cart is empty</AppText>
          <AppText style={styles.emptyText}>
            Add something from the menu
          </AppText>
        </View>
      )}
    </>
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
  empty: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.light,
  },
  emptyText: {
    color: colors.medium,
    fontSize: 15,
  },
  hall: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  hallTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
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
