import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the Homescreen</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go to demo"
      />
      <Button
        onPress={() => navigation.navigate("Lists")}
        title="Go to Lists"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Images Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;