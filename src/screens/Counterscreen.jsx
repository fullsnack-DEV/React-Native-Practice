import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Counterscreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text> This is a Counter screen</Text>
      <Button
        title="Increse"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decerese"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />

      <Text> Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counterscreen;
