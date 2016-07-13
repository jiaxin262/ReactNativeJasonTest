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
            <View style={styles.container}>
                <TouchableOpacity onPress={this.openMovieList.bind(this)}>
                    <Text style={styles.item}>go to movieList</Text>
                </TouchableOpacity>
            </View>
        );
    }

    openMovieList() {
        this.props.navigator.push({
            title: 'MovieList',
            component: MovieList,
            type: 'Bottom'
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        fontSize: 30,
        textAlign: 'center'
    }
});