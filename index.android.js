/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import MainPage from './src/MainPage';

class JasonRnProject extends Component {
  render(){
    let defaultName = 'MainPage';
    let defaultComponent = MainPage;
    return (
        <Navigator
          initialRoute = {{name: defaultName, component: defaultComponent}}
          configureScene = {this.configureScene}
          sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 74)}}
          renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
          }}
          navigationBar = {this.getNavigationBar()}
        />
    );
  }

  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  getNavigationBar() {
    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if (index > 0) {
          return (
              <TouchableOpacity
                  onPress={() => navigator.pop()}
                  style={styles.button}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
          );
        } else {
          return null;
        }
      },

      RightButton(route, navigator, index, navState) {
        if (route.onRightButtonPress) {
          return(
              <TouchableOpacity
                  onPress={route.onRightButtonPress}
                  style={styles.button}>
                <Text style={styles.buttonText}>route.rightText || 'Right'</Text>
              </TouchableOpacity>
          );
        }
      },

      Title(route, navigator, index, navState) {
        return(
            <View style={styles.title}>
              <Text style={styles.buttonText}>{route.title ? route.title : 'JasonRN'}</Text>
            </View>
        )
      }
    }

    return (
        <Navigator.NavigationBar
          routeMapper={routeMapper}
          style={styles.navigationBar}
        />
    );
  }

}

const styles = StyleSheet.create({
  navigationBar: {
    alignItems: 'center',
    backgroundColor: '#55ACEE',
    shadowOffset:{
      width: 1,
      height: 0.5
    },
    shadowColor: '#55ACEE',
    shadowOpacity: 0.8
  },
  title: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flex: 1, 
    width: 50, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '400',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('JasonRnProject', () => JasonRnProject);
