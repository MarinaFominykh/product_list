import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";

export const ProductScreen = ({ goBack, product }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text styl={styles.title}>{product.title}</Text>
        <Button title="Редактировать" />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
        </View>

        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => console.log("remove")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    marginBottom: 20,
    padding: 15,
  },

  button: {
    width: "40%",
  },
  title: {
    fontSize: 20,
  },
});
