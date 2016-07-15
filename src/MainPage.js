/**
 * Created by xin.jia
 * since 2016/7/12
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    DeviceEventEmitter
} from 'react-native';
import MovieList from './MovieList';
import NavigationParamTest from './NavigationParamTest'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days:[{
                key: 0,
                title: "A stopwatch",
                component: Day1,
                isFA: false,
                icon: "ios-stopwatch",
                size: 48,
                color: "#ff856c",
                hideNav: false
            },{
                key:1,
                title:"A weather app",
                component: Day2,
                isFA: false,
                icon: "ios-partlysunny",
                size:60,
                color:"#90bdc1",
                hideNav: true
            }]
        }
    }

    componentWillMount() {
        DeviceEventEmitter.addListener(
            'quickActionShortcut', (data) => {
                switch (data.title) {
                    case "Day5":
                        this._jumpToDay(4);
                        break;
                }
            });
    }

    render() {
        var onThis = this;
        var boxs = this.state.days.map(function (elem, index) {
            return(
                <TouchableOpacity onPress={onThis.jumpToDay.(index)}>

                </TouchableOpacity>
            );
        });
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.openMovieList.bind(this)}>
                    <Text style={styles.item}>go to movieList</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.navigationParam.bind(this)}>
                    <Text style={styles.item}>navigationParam</Text>
                </TouchableOpacity>
            </View>
        );
    }

    jumpToDay(index) {

    }

    openMovieList() {
        this.props.navigator.push({
            title: 'MovieList',
            component: MovieList,
            type: 'Bottom'
        });
    }

    navigationParam() {
        this.props.navigator.push({
           title: 'navigationParam',
           component:  NavigationParamTest
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