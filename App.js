import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello World!</Text>
        <Text style={styles.text}>Code: React Native</Text>
        <Text style={styles.text}>
          Shake your phone to open the developer menu.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#800000"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  }
});
