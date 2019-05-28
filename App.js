import React, { Component } from "react";
import { Text, View } from "react-native";

//This will check the styles folder for an index.js file
import styles from "./styles";

export default class App extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.text}>
          Blah blah blah like and subscribe blah blah blah
        </Text>
      </View>
    );
  }
}
