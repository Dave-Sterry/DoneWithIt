import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Emails" />
    </Screen>
  );
}
