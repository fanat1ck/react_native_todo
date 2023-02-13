import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({ addHendler }) {
  const [text, setText] = useState("");

  const onChange = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder="Введіть справу.."
      />
      <View style={styles.container}>
        <Button
          style={styles.button}
          color={"grey"}
          title="Добавити задачу"
          onPress={() => addHendler(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
