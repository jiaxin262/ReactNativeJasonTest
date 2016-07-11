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

var MOCKED_MOVIES_DATA = [
  {title: 'title', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

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
    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;
    return (
        <Navigator
          initialRoute = {{name: defaultName, component: defaultComponent}}
          configureScene = {(route)=>{
            return Navigator.SceneConfigs.verticalDownSwipeJump;
          }}
          renderScene = {(route, navigator) => {
            let Component = route.component;
            return <Component {...route.param} navigator={navigator}/>
          }}
        />
    );

    //var movie = MOCKED_MOVIES_DATA[0];
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
  },
  rightContainer: {
    flex: 1,
    height: 120,
    backgroundColor: '#AEEEEE',
    marginRight: 10,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F0FFF0',
  },
  thumbnail: {
    width: 90, 
    height: 120,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: "center",
  },
});

AppRegistry.registerComponent('JasonRnProject', () => JasonRnProject);
