import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Hall 1",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 2,
    title: "Hall 2",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 3,
    title: "Hall 3",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 4,
    title: "Hall 4",
    image: require("../assets/hostel.jpg"),
  },

  {
    id: 5,
    title: "Hall 5",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 6,
    title: "Hall 6",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 7,
    title: "Hall 7",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 8,
    title: "Hall 8",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 9,
    title: "Hall 9",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 10,
    title: "Hall 10",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 11,
    title: "Hall 11",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 12,
    title: "Hall 12",
    image: require("../assets/hostel.jpg"),
  },
  {
    id: 13,
    title: "Hall 13",
    image: require("../assets/hostel.jpg"),
  },
];
function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
