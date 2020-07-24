import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Coloucounter = ({ colour, onIncrese, onDecrease }) => {
  return (
    <View>
      <Text>{colour}</Text>

      <Button onPress={() => onIncrese()} title={`Increse ${colour}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${colour}`} />
    </View>
  );
};
const style = StyleSheet.create({});

export default Coloucounter;
