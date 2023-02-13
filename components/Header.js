import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список справ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
  },
  text: {
    color: "grey",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
