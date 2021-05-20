import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

function ListitemDeleteAction(props) {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
  },
});
export default ListitemDeleteAction;
