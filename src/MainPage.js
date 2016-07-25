/**
 * Created by xin.jia
 * since 2016/7/12
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    DeviceEventEmitter,
    Image,
    ScrollView
} from 'react-native';
import Util from './util/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieList from './view/MovieList';
import NavigationParamTest from './view/NavigationParamTest';
import StopWatch from './view/StopWatch';
import WeatherApp from './view/WeatherApp';
import SwiperTest from './view/SwiperTest';

var COLORS = [
    '#F0FFa0','#BBFFFF','#F0FFF0','#90EE90','#B0E0E6','#EEEED1','#F5DEB3','#30Ea9a','#87CEFF','#AB82FF'
];

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days:[{
                key: 0,
                title: "MovieList",
                component: MovieList,
                icon: "ios-film-outline",
                size: 110,
                color: "#ffbadd",
                bgColor: COLORS[0],
                hideNav: false
            },{
                key:1,
                title:"NavigationParam",
                component: NavigationParamTest,
                icon: "md-attach",
                size:110,
                color:"#ffbaca",
                bgColor: COLORS[1],
                hideNav: true
            },{
                key: 2,
                title: "Stopwatch",
                component: StopWatch,
                icon: "ios-stopwatch-outline",
                size: 110,
                color: "#ffbaba",
                bgColor: COLORS[2],
                hideNav: false
            },{
                key:3,
                title:"WeatherApp",
                component: WeatherApp,
                icon: "ios-cloudy-outline",
                size:110,
                color:"#ffbaba",
                bgColor: COLORS[3],
                hideNav: true
            },{
                key: 4,
                title: "SwiperTest",
                component: SwiperTest,
                icon: "md-swap",
                size: 110,
                color: "#ffbaba",
                bgColor: COLORS[4],
                hideNav: false
            },{
                key:5,
                title:"A weather app",
                component: NavigationParamTest,
                icon: "ios-alarm-outline",
                size:110,
                color:"#ffbaba",
                bgColor: COLORS[5],
                hideNav: true
            },{
                key: 6,
                title: "A stopwatch",
                component: MovieList,
                icon: "ios-albums",
                size: 110,
                color: "#ffbaba",
                bgColor: COLORS[6],
                hideNav: false
            },{
                key:7,
                title:"A weather app",
                component: NavigationParamTest,
                icon: "ios-albums-outline",
                size:110,
                color:"#ffbaba",
                bgColor: COLORS[7],
                hideNav: true
            },{
                key: 8,
                title: "A stopwatch",
                component: MovieList,
                icon: "ios-alert",
                size: 110,
                color: "#ffbaba",
                bgColor: COLORS[8],
                hideNav: false
            },{
                key:9,
                title:"A weather app",
                component: NavigationParamTest,
                icon: "ios-alert-outline",
                size:110,
                color:"#ffbaba",
                bgColor: COLORS[9],
                hideNav: true
            }]
        }
    }

    // componentWillMount() {
    //     DeviceEventEmitter.addListener(
    //         'quickActionShortcut', (data) => {
    //             switch (data.title) {
    //                 case "Day5":
    //                     this.jumpToDay(4);
    //                     break;
    //             }
    //         });
    // }

    render() {
        var onThis = this;
        var boxs = this.state.days.map(function (elem, index) {
            return(
                <TouchableHighlight key={elem.key} style={[styles.touchBox, {backgroundColor:elem.bgColor}]}
                                    underlayColor="#E8E8E8"  onPress={() => onThis.jumpToDay(elem)}>
                    <View style={styles.boxContainer}>
                        <Icon size={elem.size} name={elem.icon} color={elem.color}></Icon>
                        <Text style={styles.boxText}>{elem.title}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
        return(
            <ScrollView>
                <View style={styles.touchBoxContainer}>
                    {boxs}
                </View>
            </ScrollView>
        );
    }

    jumpToDay(elem) {
        this.props.navigator.push({
            title: elem.title,
            component: elem.component
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
    },
    touchBox:{
        width: Util.size.width/2-0.34,
        height:Util.size.width/2,
        backgroundColor:"#fff",
    },
    touchBoxContainer:{
        flex: 1,
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap:"wrap",
        width: Util.size.width,
    },
    touchBox1:{
        borderBottomWidth: Util.pixel,
        borderBottomColor:"#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor:"#ccc",
    },
    touchBox2:{
        borderBottomWidth: Util.pixel,
        borderBottomColor:"#ccc",
    },
    boxContainer:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    boxText:{
        width:Util.size.width/2,
        textAlign:"center",
        fontSize:16
    },
    slide: {
        flex: 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideText:{
        position:"absolute",
        bottom: 0,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"rgba(255,255,255,0.5)",
        width: Util.size.width,
        textAlign:"center",
        fontSize: 12
    }
});