/**
 * Created by xin.jia
 * since 2016/7/12
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import MovieList from './movies/MovieList';

export default class MainPage extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.openMovieList.bind(this)}>
                    <Text>go to movieList</Text>
                </TouchableOpacity>
            </View>
        );
    }

    openMovieList() {
        this.props.navigator.push({
            title: 'MovieList',
            component: MovieList
        });
    }

}
