import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddProduct } from "./src/AddProduct";
import { Product } from "./src/Product";

export default function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (title) => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };
  return (
    <View>
      <Navbar title="Product List" />
      <View style={styles.container}>
        <AddProduct onSubmit={addProduct} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={({ item }) => <Product product={item} />}
        />
        {/* <View>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
