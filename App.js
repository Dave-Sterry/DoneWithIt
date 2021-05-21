import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput placeholder="username" icon="email" />
    </Screen>
  );
}
