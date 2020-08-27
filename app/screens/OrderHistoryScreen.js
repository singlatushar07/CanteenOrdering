import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import AuthContext from "../auth/context";
import orderApi from "../api/orders";
import routes from "../navigation/routes";
import Spinner from "react-native-loading-spinner-overlay";
import listings from "../Data/halls";

function OrderHistoryScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);
  const loadHistory = async () => {
    setLoading(true);
    const response = await orderApi.getHistory(user._id);
    // console.log(response.data);
    setLoading(false);

    if (!response.ok) return setError(true);
    else setError(false);
    const history = response.data;
    setHistory(history);
  };
  const renderItem = (item) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(routes.ORDER_SUMMARY, item.items)}
    >
      <View style={styles.Maincontainer}>
        <View style={styles.detailsContainer}>
          <Image
            source={listings.find((element) => element.id === item.hall).image}
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
          {item.time.split("T")[0]},{item.time.split("T")[1]}
        </AppText>
        <Text style={{ color: "#aaa" }}>Total Amount</Text>
        <AppText style={{ fontSize: 15, fontWeight: "bold", color: "green" }}>
          ₹{item.totalPrice}
        </AppText>
        <Text style={{ color: "#aaa" }}>Payment Method</Text>
        <AppText style={{ fontSize: 15, fontWeight: "bold" }}>
          {item.payment_method}
        </AppText>
        {!item.isDineIn ? (
          <>
            <Text style={{ color: "#aaa" }}>Room</Text>
            <AppText style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.room}
            </AppText>
          </>
        ) : (
          <Text> dine in</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView>
      <Spinner
        visible={loading}
        size="large"
        animation="fade"
        color={colors.light}
        cancelable={true}
      />
      <FlatList
        data={history}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => renderItem(item)}
        refreshing={refreshing}
        onRefresh={() => loadHistory()}
      />
    </SafeAreaView>
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
