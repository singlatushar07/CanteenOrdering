import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import AppText from "../components/AppText";
import colors from "../config/colors";
import FoodItemListing from "../components/FoodItemListing";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  const availlibleMeal = useSelector((state) => state.meals.meals);
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
      <FoodItemListing
        data={availlibleMeal}
        ListHeaderComponent={headerContent}
      />
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
