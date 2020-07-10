import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { FlatList } from "react-native";

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
];

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <View style={styles.userContainer}>
          <FlatList
            data={foods}
            keyExtractor={(food) => food.id.toString()}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                subTitle={"item.subTitle"}
                image={item.image}
              />
            )}
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
  },
});

export default ListingDetailsScreen;
