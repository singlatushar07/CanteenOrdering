import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AuthContext from "../auth/context";
import orderApi from "../api/orders";
import Spinner from "react-native-loading-spinner-overlay";
import routes from "../navigation/routes";
import { useDispatch } from "react-redux";
import { resetCart } from "../store/actions/mealsaction";

export default function PaymentSceen({ route, navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const orderDetails = route.params;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const placeOrder = async (orderDetails) => {
    setLoading(true);
    const response = await orderApi.placeOrder(orderDetails);
    setLoading(false);
    if (response.ok) {
      alert("Order Placed Successfully");
    } else {
      alert("Failed to place order");
    }
    dispatch(resetCart());
    navigation.navigate(routes.CART);
  };
  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        size="large"
        animation="fade"
        color={colors.light}
        cancelable={true}
      />
      <Text style={styles.paymentText}>Payment Options</Text>
      <ScrollView>
        <View>
          <View
            style={{ flexDirection: "row", paddingTop: 50, paddingLeft: 10 }}
          >
            <MaterialCommunityIcons
              name="cash"
              size={30}
              color={colors.cashGreen}
            />
            <Text style={styles.textStyle}>CASH ON DELIVERY</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => (orderDetails.payment_method = "COD")}
            >
              <MaterialCommunityIcons
                name="cash"
                size={70}
                color={colors.danger}
              />
            </TouchableOpacity>
            <AppText>Cash On Delivery</AppText>
          </View>
        </View>
        <View>
          <View
            style={{ flexDirection: "row", paddingTop: 50, paddingLeft: 10 }}
          >
            <MaterialCommunityIcons
              name="cash"
              size={30}
              color={colors.cashGreen}
            />
            <Text style={styles.textStyle}>PAY LATER</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => (orderDetails.payment_method = "account")}
            >
              <MaterialCommunityIcons
                name="checkbook"
                size={70}
                color={colors.danger}
              />
            </TouchableOpacity>
            <AppText>Pay Later</AppText>
          </View>
        </View>
      </ScrollView>
      <Button
        title="log"
        onPress={() => {
          console.log(user, "CCC");
          orderDetails.userId = user._id;
          placeOrder(orderDetails);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    padding: 15,
    height: "75%",
  },
  paymentText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  textStyle: {
    paddingLeft: 15,
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "700",
    color: colors.primary,
  },
});
