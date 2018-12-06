/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: ""
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          accessible={false}
          testID="test-id-textfield"
          style={{ borderWidth: 1, height: 30, margin: 10, width: "60%" }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <View accessible={false} testID="test-id-textfield-result" style={{ width: "60%" }}>
          <Text style={{ fontSize: 20 }}>
            <Text style={{ color: "gray" }}>You typed: </Text>{this.state.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
