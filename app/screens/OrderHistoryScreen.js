import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import listingApi from "../api/foodListings";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import { useSelector } from "react-redux";
import AuthContext from "../auth/context";
import ActivityIndicator from "../components/ActivityIndicator";

function OrderHistoryScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadHistory();
  }, []);
  const loadHistory = async () => {
    setLoading(true);
    const response = await listingApi.getHistory(user._id);
    setLoading(false);

    if (!response.ok) return setError(true);
    else setError(false);
    const food = response.data;
    setHistory(food);
  };
  // time = "";
  // var date = new Date().getDate(); //Current Date
  // var month = new Date().getMonth() + 1; //Current Month
  // var year = new Date().getFullYear(); //Current Year
  // var hours = new Date().getHours(); //Current Hours
  // var min = new Date().getMinutes(); //Current Minutes
  // let time = date + "/" + month + "/" + year + " " + hours + ":" + min;
  // const data = useSelector((state) => state.meals.cart);

  // const hallInfo = data[0] ? data[0].hall : null;
  // let total = 0;
  // for (let i = 0; i < data.length; i++) {
  //   total += data[i].price * data[i].quantity;
  // }
  // let history = [
  //   { time: time, hall: hallInfo, id: 1, totalPrice: total, items: data },
  // ];

  // history.hall = data[0] ? data[0].hall : null;
  const renderItem = (item) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Summary", item.items)}
    >
      <View style={styles.Maincontainer}>
        <View style={styles.detailsContainer}>
          <Image
            source={require("../assets/hostel.jpg")}
            style={styles.image}
          />

          <View style={styles.card}>
            <AppText style={styles.title}>Hall {item.hall}</AppText>
          </View>
        </View>
        <ListItemSeparator style={{ backgroundColor: colors.dark }} />
        <Text style={{ color: "#aaa" }}>Items</Text>
        <AppText style={{ fontSize: 15, fontWeight: "800" }}>
          Click to view more items...
        </AppText>
        <Text style={{ color: "#aaa" }}>ORDERED ON</Text>
        <AppText style={{ fontSize: 15, fontWeight: "800" }}>
          {item.time}
        </AppText>
        <Text style={{ color: "#aaa" }}>Total Amount</Text>
        <AppText style={{ fontSize: 15, fontWeight: "bold", color: "green" }}>
          ₹{item.totalPrice}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <>
      <Text
        style={{
          marginLeft: 15,
          marginTop: 5,
          marginBottom: 5,
          fontSize: 25,
          fontWeight: "bold",
          color: colors.cashGreen,
        }}
      >
        History
      </Text>
      {loading && <ActivityIndicator visible={loading} />}
      {!loading && (
        <FlatList
          data={history}
          m
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => renderItem(item)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    borderRadius: 15,
    backgroundColor: colors.light,
    // borderWidth: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
    borderColor: "#ccc",
    margin: 10,

    overflow: "hidden",
    padding: 10,
  },
  card: {
    flex: 1,
    paddingBottom: 40,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    marginVertical: 1,
  },
  header: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  image: {
    borderRadius: 5,
    height: 60,
    marginRight: 10,
    width: 60,
  },
  price: {
    color: colors.secondary,
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: colors.medium,
    fontSize: 14,
  },
});

export default OrderHistoryScreen;
