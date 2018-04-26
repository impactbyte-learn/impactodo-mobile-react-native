import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Content from "./Content";

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Impact Todo</Text>
        <Content />
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
