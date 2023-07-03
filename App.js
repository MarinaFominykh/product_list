import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { ProductScreen } from "./src/screens/ProductScreen";

export default function App() {
  const [productId, setProductId] = useState("2");
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "Хлеб",
    },
    {
      id: "2",
      title: "Молоко",
    },
  ]);

  const addProduct = (title) => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };
  let content = (
    <MainScreen
      products={products}
      addProduct={addProduct}
      removeProduct={removeProduct}
      openProduct={setProductId}
    ></MainScreen>
  );

  if (productId) {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    content = (
      <ProductScreen
        goBack={() => {
          setProductId(null);
        }}
        product={selectedProduct}
      />
    );
  }
  return (
    <View>
      <Navbar title="Список продуктов" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
