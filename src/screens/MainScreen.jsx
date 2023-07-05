import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { AddProduct } from "../components/AddProduct";
import { Product } from "../components/Product";
export const MainScreen = ({
  addProduct,
  products,
  removeProduct,
  openProduct,
}) => {
  let content = (
    <FlatList
      keyExtractor={(item) => item.id}
      data={products}
      renderItem={({ item }) => (
        <Product product={item} onRemove={removeProduct} onOpen={openProduct} />
      )}
    />
  );

  if (products.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          source={require("../../assets/no-items.png")}
        />
        {/* <Image
          style={styles.image}
          source={{
            uri: "https://avatars.mds.yandex.net/i?id=9ea0c8da25eef2923f9f494c79a211fb155cea36-9102470-images-thumbs&n=13",
          }}
        /> */}
      </View>
    );
  }
  return (
    <View>
      <AddProduct onSubmit={addProduct} />

      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
