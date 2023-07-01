import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Product = ({ product, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        console.log("Press", product);
      }}
      onLongPress={onRemove.bind(null, product.id)}
    >
      <View style={styles.product}>
        <Text>{product.title}</Text>
      </View>
    </TouchableOpacity>
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
