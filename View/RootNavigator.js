import React, { Component } from 'react';
import { Navigator, StatusBar, StyleSheet, Text, View } from 'react-native';

import StyleVars from 'Socail/StyleVars';
import SharedStyles from 'Social/SharedStyles';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: StyleVars.Colors.navBarBackground,
    borderBottomColor: "rgba(255,255,255,0.5)",
    borderBottomWidth: 1,
  },
  buttonStyle: { marginTop: 13 },
  titleStyle: {marginTop: 10},
});

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    return route.leftButton ? (
      <route.leftButton
        style={styles.buttonStyle}
        navigator={navigator}
        route={route}
      />
    ) : null;
  },
  Title: (route, navigator, index, navState) => {
    return route.title ? (
      <Text
        style={[styles.titleStyle, SharedStyles.navBarTitleText]}
        numberOfLines={1}
      >{route.title}</Text>
    ) : null;
  },
  RightButton: (route, navigator, index, navState) => {
    return route.rightButton ? (
      <route.rightButton
        style={styles.buttonStyle}
        navigator={navigator}
        route={route}
      />
    ) : null;
  }
};

export default class RootNavigator extends Component {
  render() {
    let navigationBar = (
      <Navigator.NavigationBar
        routeMapper={}
        style={styles.navBar}
      />
    )
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
