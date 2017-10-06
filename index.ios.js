import React, { Component } from 'react';
import Welcome from './components/ios/Welcome';

import {
  AppRegistry,
  NavigatorIOS,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

class nthapp extends React.Component {
  render() {
    return (
      <View style={styles.wrap}>
          <StatusBar
              backgroundColor="blue"
              barStyle="light-content"
          />
          <NavigatorIOS
              navigationBarHidden={true}
              backButtonTitle=' '
              barTintColor='#000'
              tintColor="#FFF"
              titleTextColor="#000"
              style={styles.wrap}
              initialRoute={{
                title: ' ',
                component: Welcome
              }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
      flex: 1,
      backgroundColor: "#FAE14B",
  },
});

AppRegistry.registerComponent('nthapp', () => nthapp);
