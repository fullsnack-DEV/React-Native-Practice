import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #1" },
    { name: "Friend #1" },
    { name: "Friend #1" },
    { name: "Friend #1" },
    { name: "Friend #1" },
    { name: "Friend #1" },
    { name: "Friend #1" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friends.name}
      data={friends}
      renderItem={(item) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
