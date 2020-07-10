import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import { ListItem } from "../components/lists";

const foods = [
  {
    id: 1,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 2,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 3,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 4,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 5,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 6,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 7,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 8,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 9,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 10,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 11,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 12,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
  {
    id: 13,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
  },
];

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.time}</AppText>
        <View style={styles.userContainer}>
          <FlatList
            data={foods}
            keyExtractor={(food) => food.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={item.id}
                subTitle={item.subTitle}
                image={item.image}
              />
            )}
            contentInsetAdjustmentBehavior="automatic"
          />
        </View>
      </View>
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
    marginBottom: 1000,
  },
});

export default ListingDetailsScreen;
