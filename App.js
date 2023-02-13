import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
  const [listItems, setListItems] = useState([
    { text: "Купити кифір", key: "1" },
    { text: "Купити молоко", key: "2" },
    { text: "Купити грушку", key: "3" },
    { text: "Купити яблука", key: "4" },
  ]);

  const addHendler = (text) => {
    setListItems((list) => {
      return [
        {
          text: text,
          key: Math.random().toString().substring(7),
        },
        ...list,
      ];
    });
  };
  const deleteHandler = (key) => {
    setListItems((list) => {
      return list.filter((listItems) => listItems.key !== key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHendler={addHendler} />

      <View>
        <FlatList
          data={listItems}
          renderItem={({ item }) => (
            <ListItem element={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
