/**
 * Created by xin.jia
 * since 2016/7/20
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet,
    Text,
    ListView
} from 'react-native';
import Util from '../util/utils';

export default class StopWatch extends Component {
    constructor() {
        super();
        this.state={
            sectionTime: '00:00.00',
            totalTime: '00:00.00'
        };
    }

    render() {
        return(
            <View style={styles.watchContainer}>
                <WatchHead sectionTime={this.state.sectionTime} totalTime={this.state.totalTime}></WatchHead>
                <WatchControl startWatch={()=>this.startWatch()} stopWatch={()=>this.stopWatch()}
                    addRecord={()=>this.addRecord()} clearRecord={()=>this.clearRecord()}></WatchControl>
            </View>
        );
    }

    startWatch() {

    }

    stopWatch() {

    }

    addRecord() {

    }

    clearRecord() {

    }
}

class WatchHead extends Component {
    static propTypes={
      sectionTime: React.PropTypes.string.isRequired,
      totalTime: React.PropTypes.string.isRequired
    };

    render() {
        return(
            <View style={styles.watchHeadContainer}>
                <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
                <Text style={styles.totalTime}>{this.props.totalTime}</Text>
            </View>
        );
    }
}

class WatchControl extends Component {
    static propTypes = {
        startWatch: React.PropTypes.func.isRequired,
        stopWatch: React.PropTypes.func.isRequired,
        addRecord: React.PropTypes.func.isRequired,
        clearRecord: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.watchOn = false;
        this.state = {
            startBtnText: '开始',
            stopBtnText: '计次',
            startTextColor: '#606060',
            stopTextColor: '#c0c0c0'
        };
    }

    render() {
        return (
            <View style={styles.watchControlContainer}>
                <TouchableHighlight style={styles.btn} onPress={()=>this.startWatch()} underlayColor="#eee">
                    <Text style={[styles.btnStartStopText, {color: this.state.startTextColor}]}>{this.state.startBtnText}</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={()=>this.addRecord()} underlayColor="#eee">
                    <Text style={[styles.btnStartStopText, {color: this.state.stopTextColor}]}>{this.state.stopBtnText}</Text>
                </TouchableHighlight>
            </View>
        );
    }

    startWatch() {
        this.watchOn = !this.watchOn;
        if (this.watchOn) {
            this.props.startWatch();
            this.setState({
                startBtnText: '停止',
                stopBtnText: '计次',
                startTextColor: '#cc0000',
                stopTextColor: '#606060'
            });
        } else {
            this.props.stopWatch();
            this.setState({
                startBtnText: '开始',
                stopBtnText: '复位',
                startTextColor: '#606060',
                stopTextColor: '#66cc00'
            });
        }
    }

    addRecord() {

    }
}

const styles = StyleSheet.create({
    watchContainer:{
        alignItems: 'center'
    },
    watchHeadContainer:{
        width: Util.size.width,
        paddingTop: 50, paddingLeft: 30, paddingRight:30, paddingBottom:40,
        backgroundColor: "#fff",
        borderBottomWidth: 1, borderBottomColor:"#ddd",
        height: 170
    },
    sectionTime:{
        fontSize: 20,
        fontWeight:"100",
        paddingRight: 30,
        color: "#555",
        position:"absolute",
        left:Util.size.width-140,
        top:30
    },
    totalTime:{
        fontSize: 60,
        fontWeight: "100",
        color: "#222",
        paddingLeft:20
    },
    watchControlContainer:{
        width: Util.size.width,
        height: 100,
        flexDirection:"row",
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btn:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor:"#fff",
        alignItems: 'center',
        justifyContent:"center"
    },
    btnStartStopText:{
        fontSize:14,
        backgroundColor:"transparent"
    },
});
