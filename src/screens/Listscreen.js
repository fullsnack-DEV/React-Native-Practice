import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #1", age: 25 },
    { name: "Friend #1", age: 26 },
    { name: "Friend #1", age: 27 },
    { name: "Friend #1", age: 21 },
    { name: "Friend #1", age: 22 },
    { name: "Friend #1", age: 23 },
    { name: "Friend #1", age: 28 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}- age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
