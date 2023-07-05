import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
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
    const product = products.find((p) => p.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${product.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          onPress: () => {
            setProductId(null);
            setProducts((prev) => prev.filter((product) => product.id !== id));
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  const updateProduct = (id, title) => {
    setProducts((old) =>
      old.map((product) => {
        if (product.id === id) {
          product.title = title;
        }
        return product;
      })
    );
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
        onRemove={removeProduct}
        goBack={() => {
          setProductId(null);
        }}
        product={selectedProduct}
        onSave={updateProduct}
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
