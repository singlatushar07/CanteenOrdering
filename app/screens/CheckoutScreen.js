import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import user from "../user/user";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { useSelector } from "react-redux";
import RadioForm from "react-native-simple-radio-button";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import routes from "../navigation/routes";
import { ListItemSeparator } from "../components/lists";

const deliveryFee = 20;

function CheckoutScreen({ navigation, route }) {
  const history = route.params;

  const [isDineIn, setIsDineIn] = useState(false);
  const [room, setRoom] = useState("");
  const roomNoSchema = /[A-G]{1}[0-9]{3}/;
  const anything = /.*?/;
  const validationSchema = Yup.object().shape({
    room: Yup.string()
      .required(isDineIn)
      .matches(
        isDineIn ? roomNoSchema : anything,
        "Enter valid room number like B403"
      )
      .length(4)
      .label("Room Number"),
  });
  var radio_props = [
    { label: "Dine In", value: false },
    { label: "Delivery", value: true },
  ];
  const data = useSelector((state) => state.meals.cart);
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].price * data[i].quantity;
  }
  function DisplayItem({ text1, text2 }) {
    return (
      <View style={styles.item}>
        <AppText style={{ flex: 1 }}>{text1}</AppText>
        <AppText>{text2}</AppText>
      </View>
    );
  }

  return (
    <Form
      initialValues={{
        room: room,
      }}
      onSubmit={(values) => {
        history.isDineIn = isDineIn;
        history.room = values.room;
        navigation.navigate(routes.PAYMENT, history);
      }}
      validationSchema={validationSchema}
    >
      <ScrollView style={styles.container}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.header}>User Details</AppText>
          <DisplayItem text1="Name" text2={user.name} />
          <DisplayItem text1="Hall" text2={user.hall} />
          <DisplayItem text1="Room No" text2={user.room} />
          <DisplayItem text1="Mobile" text2={user.mobile} />
        </View>

        <ListItemSeparator style={styles.separator} />

        <View style={styles.detailsContainer}>
          <AppText style={styles.header}>Bill Details</AppText>
          <DisplayItem text1="Item Total" text2={`₹${total}`} />
          <DisplayItem text1="Delivery Fee" text2={`₹${deliveryFee}`} />
          <ListItemSeparator style={{ marginVertical: 10, height: 1.5 }} />
          <DisplayItem text1="To Pay" text2={`₹${total + deliveryFee}`} />
        </View>

        <ListItemSeparator style={styles.separator} />

        <View style={styles.detailsContainer}>
          <AppText style={styles.header}>Order Options</AppText>
          <RadioForm
            radio_props={radio_props}
            formHorizontal={true}
            labelHorizontal={true}
            initial={0}
            animation={false}
            onPress={(value) => {
              setIsDineIn(value);
              setRoom("");
            }}
            labelStyle={{
              marginRight: 30,
            }}
          />
          {isDineIn && (
            <>
              <FormField
                maxLength={255}
                name="room"
                placeholder="Room Number"
                width="50%"
              />
              <AppText style={{ fontSize: 15, color: colors.medium }}>
                Please note delivery service is only availiable in the hall as
                the canteen location.
              </AppText>
            </>
          )}
        </View>

        <ListItemSeparator style={styles.separator} />

        <View style={styles.detailsContainer}>
          <AppText style={styles.header}>Cancellation Policy</AppText>
          <AppText>
            Review your order and address to avoid cancellations .Order once
            placed cannot be cancelled.
          </AppText>
        </View>

        <ListItemSeparator style={styles.separator} />
        <ListItemSeparator style={styles.separator} />
      </ScrollView>
      <View style={{ paddingHorizontal: 10 }}>
        <SubmitButton title="Proceed to pay" />
      </View>
    </Form>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  detailsContainer: {
    padding: 10,
    marginBottom: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
  },
  separator: {
    height: 25,
    backgroundColor: colors.light,
  },
});

export default CheckoutScreen;
