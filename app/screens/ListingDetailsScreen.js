import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import FoodItemListing from "../components/FoodItemListing";

const foods = {
  Snacks: [
    {
      id: 1,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
      subTitle: "Cheakcn lidec",
    },
    {
      id: 2,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
      subTitle: "Cheakcn lidec",
    },
    {
      id: 3,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
      subTitle: "Cheakcn lidec",
    },
  ],
  Veg: [
    {
      id: 1,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 2,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 3,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 4,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 5,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 6,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 7,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
  ],
  "Non Veg": [
    {
      id: 4,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 5,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
    {
      id: 3,
      title: "food1",
      image: require("../assets/burger.jpg"),
      price: 10,
    },
  ],
};

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  navigation.setOptions({
    title: listing.title,
  });
  const headerContent = () => (
    <>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.time}</AppText>
      </View>
    </>
  );

  return (
    <View>
      <FoodItemListing data={foods} ListHeaderComponent={headerContent} />
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
