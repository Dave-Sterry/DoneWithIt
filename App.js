import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

const catergories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];
export default function App() {
  return (
    <Screen>
      <AppPicker items={catergories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Emails" />
    </Screen>
  );
}
