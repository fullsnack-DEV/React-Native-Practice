import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const Colorpallet = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, Randomrgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const Randomrgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `
  rgb(${red} , ${green} , ${blue})
  `;
};

const style = StyleSheet.create({});

export default Colorpallet;
