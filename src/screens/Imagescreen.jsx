import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Imagedetails from "../Components/Imagedetails.js";

const Imagescreen = () => {
  return (
    <View>
      <Imagedetails
        title="Forest"
        imagesource={require("../../assets/forest.jpg")}
      />
      <Imagedetails
        title="Mountain"
        imagesource={require("../../assets/mountain.jpg")}
      />
      <Imagedetails
        title="Beach"
        imagesource={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Imagescreen;
