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
import FirstPageComponent from './FirstPageComponent';
import MainPage from './src/MainPage';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class JasonRnProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,  //这里放自定义的state变量及初始值
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    this.fetchDatas = this.fetchData.bind(this);
  }

  componentDidMount() {
    //this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    let defaultName = 'MianPage';
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

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMoview}
        style={styles.ListView}/>
    );
    //var movie = this.state.movies[0];
    //return this.renderMoview(movie);
  }

  renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>正在加载电影数据...</Text>
        </View>
      );
    }

  renderMoview(movie) {
      return (
        <View style={styles.container}>
          <Image source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  listView: {
    paddingTop: 20,
    backgroundColor: '#F0FFF0',
  },
});

AppRegistry.registerComponent('JasonRnProject', () => JasonRnProject);
