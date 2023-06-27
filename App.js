import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddProduct } from "./src/AddProduct";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Product List" />
      <AddProduct />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
