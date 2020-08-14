import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";

export default function PaymentSceen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paymentText}>Payment Options</Text>
      <View>
        <View style={{ flexDirection: "row", paddingTop: 50, paddingLeft: 10 }}>
          <MaterialCommunityIcons
            name="cash"
            size={30}
            color={colors.cashGreen}
          />
          <Text
            style={{
              paddingLeft: 15,
              fontSize: 20,
              paddingBottom: 10,
              fontWeight: "700",
              color: colors.primary,
            }}
          >
            CASH ON DELIVERY
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => console.log("COD")}>
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
        <View style={{ flexDirection: "row", paddingTop: 50, paddingLeft: 10 }}>
          <MaterialCommunityIcons
            name="cash"
            size={30}
            color={colors.cashGreen}
          />
          <Text
            style={{
              paddingLeft: 15,
              fontSize: 20,
              paddingBottom: 10,
              fontWeight: "700",
              color: colors.primary,
            }}
          >
            ADD TO ACCOUNT
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => console.log("Khadde me dalvao")}>
            <MaterialCommunityIcons
              name="checkbook"
              size={70}
              color={colors.danger}
            />
          </TouchableOpacity>
          <AppText>Add To your Account</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  paymentText: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
