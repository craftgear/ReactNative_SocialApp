import React, { Component } from 'react';
import { Navigator, StatusBar, StyleSheet, Text, View } from 'react-native';

export default class RootNavigator extends Component {
  render() {
    return (
      <Navigator
        ref={(navigator) => this._setNavigatorRef(navigator)}
        initialRoute={this._getInitialRoute()}
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
        navigationBar={this.state.hideNavigationBar ? null : nav}
      >

      </Navigator>
    )
  }
}
