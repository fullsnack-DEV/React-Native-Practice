import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colourcounter from "../Components/Colourcounter";

const INCREMENT_COLOR = 15;

const Squarescreen = () => {
  const [Red, setRed] = useState(0);
  const [Blue, setBlue] = useState(0);
  const [Green, setGreen] = useState(0);

  return (
    <View>
      <Colourcounter
        onIncrese={() => setRed(Red + INCREMENT_COLOR)}
        onDecrease={() => setRed(Red - INCREMENT_COLOR)}
        colour="Red"
      />
      <Colourcounter
        onIncrese={() => setBlue(Blue + INCREMENT_COLOR)}
        onDecrease={() => setBlue(Blue - INCREMENT_COLOR)}
        colour="Blue"
      />
      <Colourcounter
        onIncrese={() => setGreen(Green + INCREMENT_COLOR)}
        onDecrease={() => setGreen(Green - INCREMENT_COLOR)}
        colour="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${Red},${Blue},${Green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Squarescreen;
