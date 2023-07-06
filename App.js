import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { ProductScreen } from "./src/screens/ProductScreen";

async function loadApp() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}
// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [productId, setProductId] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApp}
  //       onError={(err) => console.log(err)}
  //       onFinish={() => setIsReady(true)}
  //     />
  //   );
  // }
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
      <View style={styles.container} onLayout={onLayoutRootView}>
        {content}
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
