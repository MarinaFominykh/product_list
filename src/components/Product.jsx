import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "./ui/AppText";
export const Product = ({ product, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        onOpen(product.id);
      }}
      onLongPress={onRemove.bind(null, product.id)}
    >
      <View style={styles.product}>
        <AppText>{product.title}</AppText>
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
