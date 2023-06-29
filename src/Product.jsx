import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Product = ({ product }) => {
  return (
    <View style={styles.product}>
      <Text>{product.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
