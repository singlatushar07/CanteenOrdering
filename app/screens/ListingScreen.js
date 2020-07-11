import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppSearchBar from "../components/AppSearchBar";

const listings = [
  {
    id: 1,
    title: "Hall 1",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 2,
    title: "Hall 2",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 3,
    title: "Hall 3",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 4,
    title: "Hall 4",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },

  {
    id: 5,
    title: "Hall 5",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 6,
    title: "Hall 6",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 7,
    title: "Hall 7",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 8,
    title: "Hall 8",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 9,
    title: "Hall 9",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 10,
    title: "Hall 10",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 11,
    title: "Hall 11",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 12,
    title: "Hall 12",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
  {
    id: 13,
    title: "Hall 13",
    image: require("../assets/hostel.jpg"),
    time: "14:00-02:00",
  },
];

function ListingScreen({ navigation }) {
  const renderItem = (item) => (
    <Card
      title={item.title}
      subTitle={item.time}
      image={item.image}
      onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
    />
  );
  return (
    <Screen style={styles.screen}>
      <AppSearchBar
        autoCorrect={false}
        data={listings}
        filteredOn="title"
        id="id"
        renderItem={renderItem}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
