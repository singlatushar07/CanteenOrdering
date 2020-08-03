import React from "react";
import { StyleSheet, Button, Image } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  // hall: Yup.object().required().nullable().label("Category"),
  image: Yup.object().nullable().label("Image"),
});

// const Halls = [
//   { label: "Hall 1", value: 1 },
//   { label: "Hall 2", value: 2 },
//   { label: "Hall 3", value: 3 },
//   { label: "Hall 4", value: 4 },
//   { label: "Hall 5", value: 5 },
//   { label: "Hall 6", value: 6 },
//   { label: "Hall 7", value: 7 },
//   { label: "Hall 8", value: 8 },
//   { label: "Hall 9", value: 9 },
//   { label: "Hall 10", value: 10 },
//   { label: "Hall 11", value: 11 },
//   { label: "Hall 12", value: 12 },
//   { label: "Hall 13", value: 13 },
// ];

const ha = (a) => {
  console.log(a);
};
function AdminUpdate({ navigation, route }) {
  const item = route.params;
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: item.title,
          price: item.price,
          description: item.subTitle,
          // hall: item.hall,
          image: [Image.resolveAssetSource(item.image).uri],
        }}
        onSubmit={(values) => ha(values)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="image" />
        {/* <Picker items={Halls} name="hall" placeholder="Hall" /> */}
        <FormField
          defaultValue={item.title}
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <FormField
          defaultValue={item.price.toString()}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />

        <FormField
          defaultValue={item.subTitle}
          maxLength={255}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="update" />
      </Form>
      <Button title="log" onPress={() => console.log("Debug12", item)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default AdminUpdate;
