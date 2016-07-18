/**
 * Created by xin.jia
 * since 2016/7/12
 */
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
import Util from './utils';
import MovieList from './MovieList';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import NavigationParamTest from './NavigationParamTest';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days:[{
                key: 0,
                title: "A stopwatch",
                component: MovieList,
                isFA: false,
                icon: "ios-stopwatch",
                size: 48,
                color: "#ff856c",
                hideNav: false
            },{
                key:1,
                title:"A weather app",
                component: NavigationParamTest,
                isFA: false,
                icon: "ios-sunny",
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
                        this.jumpToDay(4);
                        break;
                }
            });
    }

    render() {
        var onThis = this;
        var boxs = this.state.days.map(function (elem, index) {
            return(
                <TouchableHighlight key={elem.key} style={[styles.touchBox, styles.touchBox1]}
                                    underlayColor="#eee"  onPress={onThis.jumpToDay(index)}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxText}>Day{index+1}</Text>
                        {elem.isFA ? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA> :
                            <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
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

    jumpToDay(index) {
        // this.props.navigator.replace({
        //     id: `day${index+1}`,
        // });
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
    },
    touchBox:{
        width: Util.size.width/3-0.34,
        height:Util.size.width/3,
        backgroundColor:"#fff",
    },
    touchBoxContainer:{
        flexDirection: "row",
        flexWrap:"wrap",
        width: Util.size.width,
        borderTopWidth: Util.pixel,
        borderTopColor:"#ccc",
        borderLeftWidth: Util.pixel,
        borderLeftColor:"#ccc",
        borderRightWidth: Util.pixel,
        borderRightColor:"#ccc",
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
        alignItems:"center",
        justifyContent:"center",
        width: Util.size.width/3,
        height:Util.size.width/3,
    },
    boxIcon:{
        position:"relative",
        top:-10
    },
    boxText:{
        position:"absolute",
        bottom:15,
        width:Util.size.width/3,
        textAlign:"center",
        left: 0,
        backgroundColor:"transparent"
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
    },
    image:{
        width: Util.size.width,
        flex: 1,
        alignSelf: 'stretch',
    }
});