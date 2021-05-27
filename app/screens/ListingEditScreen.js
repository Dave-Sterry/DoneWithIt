import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "lamp" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "shoe-heel" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Cars", value: 4, backgroundColor: "blue", icon: "car" },
  { label: "Games", value: 5, backgroundColor: "blue", icon: "cards" },
  { label: "Sports", value: 6, backgroundColor: "blue", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "blue",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "blue",
    icon: "book",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "blue",
    icon: "square",
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
