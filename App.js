import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Emails" />
    </Screen>
  );
}
