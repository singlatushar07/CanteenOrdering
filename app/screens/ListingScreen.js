import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, Button, AppRegistry, Image } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppSearchBar from "../components/AppSearchBar";
import listings from "../../Data/halls";

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
