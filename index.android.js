/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RootNavigator from './View/RootNavigator';

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class ReactNative_SocialApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref="rootNavigator"/>
      </View>
    );
  }
}


AppRegistry.registerComponent('ReactNative_SocialApp', () => ReactNative_SocialApp);
