import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button, RecyclerViewBackedScrollViewComponent } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me "
        onPress={() =>
          Alert.prompt("my title", "my message", text => console.log(text))
        }
      />
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
