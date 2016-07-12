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
  View,
  Image,
  ListView,
  Navigator,
} from 'react-native';
import MainPage from './src/MainPage';

class JasonRnProject extends Component {
  render(){
    let defaultName = 'MainPage';
    let defaultComponent = MainPage;
    return (
        <Navigator
          initialRoute = {{name: defaultName, component: defaultComponent}}
          renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component {...route.param} navigator={navigator}/>
          }}
        />
    );
  }
}

AppRegistry.registerComponent('JasonRnProject', () => JasonRnProject);
