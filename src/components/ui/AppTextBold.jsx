import React from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";

export const AppTextBold = (props) => (
  <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-bold",
  },
});
