import url from "../keys/url";
import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import FoodItemListing from "../components/FoodItemListing";
import listingApi from "../api/foodListings";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  navigation.setOptions({
    title: listing.title,
  });

  const hallNum = listing.title.match(/(\d+)/)[0];
  const [foodItems, setFoodItems] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    loadFood();
    console.log(categories);
  }, []);

  const loadFood = async () => {
    try {
      const response = await listingApi.getFoodItems(hallNum);
      const food = response.data;
      setFoodItems(food);
      let temp = [];
      for (let i = 0; i < food.length; i++) {
        temp.push(food[i].category);
      }
      setCategories([...new Set(temp)]);
    } catch (error) {
      console.log(error);
    }
  };
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
        data={foodItems}
        categories={categories}
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
