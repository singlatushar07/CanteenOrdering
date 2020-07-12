import React, { useState } from "react";
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
var { height, width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/Ionicons";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { ListItem } from "../components/lists";

const foods = [
  {
    id: 1,
    title: "food1",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 1,
  },
  {
    id: 2,
    title: "food2",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 1,
  },
  {
    id: 3,
    title: "food3",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 1,
  },
  {
    id: 4,
    title: "food4",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 1,
  },
  {
    id: 5,
    title: "food5",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 2,
  },
  {
    id: 6,
    title: "food6",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 2,
  },
  {
    id: 7,
    title: "food7",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 2,
  },
  {
    id: 8,
    title: "food8",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 3,
  },
  {
    id: 9,
    title: "food9",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 3,
  },
  {
    id: 10,
    title: "food10",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 3,
  },
  {
    id: 11,
    title: "food11",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 4,
  },
  {
    id: 12,
    title: "food12",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 4,
  },
  {
    id: 13,
    title: "food13",
    image: require("../assets/burger.jpg"),
    subTitle: "Rs 10",
    categorie: 4,
  },
];
const dataCategories = [
  {
    id: 1,
    name: "snacks",
    color: "#fbc831",
  },
  {
    id: 2,
    name: "Drinks",
    color: "#9fd236",
  },
  {
    id: 3,
    name: "Veg",
    color: "orange",
  },
  {
    id: 4,
    name: "Chicken",
    color: "#f2f2f2",
  },
];

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const [state, setState] = useState(0);
  const _renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[styles.divCategorie, { backgroundColor: item.color }]}
        onPress={() => setState(item.id)}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const _renderItemFood = (item) => {
    let catg = state;
    if (catg == 0 || catg == item.categorie) {
      return (
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={item.image}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: "transparent",
              width: width / 2 - 20 - 10,
            }}
          />
          <Text
            style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}
          >
            {item.title}
          </Text>
          <Text style={{ fontSize: 20, color: "green" }}>{item.subTitle}</Text>
          <TouchableOpacity
            onPress={() => alert("still to be implemented")}
            style={{
              width: width / 2 - 40,
              backgroundColor: "#33c37d",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              padding: 4,
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Add Cart
            </Text>
            <View style={{ width: 10 }} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View>
      <Image style={styles.image} size source={listing.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.time}</AppText>
        <View style={styles.userContainer}>
          <FlatList
            horizontal={true}
            data={dataCategories}
            renderItem={({ item }) => _renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
          <FlatList
            data={foods}
            keyExtractor={(food) => food.id.toString()}
            renderItem={({ item }) => _renderItemFood(item)}
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
    height: 200,
    borderRadius: 10,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
    height: 300,
    flexGrow: 0,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  divFood: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: "white",
  },
});

export default ListingDetailsScreen;
