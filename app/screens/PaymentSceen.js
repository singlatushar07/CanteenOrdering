import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";

export default function PaymentSceen({ route }) {
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
            <TouchableOpacity onPress={() => console.log("Khadde me dalvao")}>
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
