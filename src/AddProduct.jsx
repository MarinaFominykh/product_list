import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export const AddProduct = (props) => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
});
