import React, { useContext } from "react";
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
import url from "../keys/url";
import AuthContext from "../auth/context";
let postData = async (c) => {
  try {
    let result = await fetch(url.ngrokurl + "/history", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(c),
    });
    data = await result.json();
  //  console.log(data);
    // putMethod(data);
    console.log("done");
  } catch (e) {
    console.log(e);
  }
};

export default function PaymentSceen({ route }) {
  const { user, setUser } = useContext(AuthContext);
  const history = route.params;
  console.log(history);
  return (
    <View style={styles.container}>
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
            <TouchableOpacity onPress={() => (history.payment_method = "COD")}>
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
              onPress={() => (history.payment_method = "account")}
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
        onPress={
          () => (console.log(user, "CCC"), (history.id = user._id),
          postData(history))
        }
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
