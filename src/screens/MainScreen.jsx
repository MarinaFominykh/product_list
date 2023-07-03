import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, Alert } from "react-native";
import { AddProduct } from "../components/AddProduct";
import { Product } from "../components/Product";
export const MainScreen = ({
  addProduct,
  products,
  removeProduct,
  openProduct,
}) => {
  return (
    <View>
      <AddProduct onSubmit={addProduct} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={products}
        renderItem={({ item }) => (
          <Product
            product={item}
            onRemove={removeProduct}
            onOpen={openProduct}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
