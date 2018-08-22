/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello jungminnnn</Text>

        <Text>Hellooooooo leeeee</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
