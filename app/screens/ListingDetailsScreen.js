import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import FoodItemListing from "../components/FoodItemListing";
import listingApi from "../api/foodListings";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;
  navigation.setOptions({
    title: listing.title,
  });

  const hallNum = listing.title.match(/(\d+)/)[0];
  const [foodItems, setFoodItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFood();
  }, []);

  const loadFood = async () => {
    setLoading(true);
    const response = await listingApi.getFoodItems(hallNum);
    setLoading(false);

    if (!response.ok) return setError(true);
    else setError(false);

    const food = response.data;
    setFoodItems(food);
    let temp = [];
    for (let i = 0; i < food.length; i++) {
      temp.push(food[i].category);
    }
    setCategories([...new Set(temp)]);
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
    <>
      {error && (
        <View style={{ padding: 20, alignItems: "center" }}>
          <AppText style={{ textAlign: "center" }}>
            Unable to fetch data
          </AppText>
          <AppButton title="Retry" width="60%" onPress={() => loadFood()} />
        </View>
      )}
      {!error && (
        <>
          {loading && <ActivityIndicator visible={loading} />}
          {!loading && (
            <FoodItemListing
              data={foodItems}
              categories={categories}
              ListHeaderComponent={headerContent}
            />
          )}
        </>
      )}
    </>
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
