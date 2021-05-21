import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(text) => setFirstName(text)}
        placeholder="first name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
