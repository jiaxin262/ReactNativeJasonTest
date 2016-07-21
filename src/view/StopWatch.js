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
            stopWatch: false,
            resetWatch: true,
            initialTime: 0,
            currentTime: 0,
            recordTime: 0,
            timeAccumulation:0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record: []
        };
    }

    componentWillUnmount() {
        this.stopWatch();
        this.clearRecord();
    }

    render() {
        return(
            <View style={styles.watchContainer}>
                <WatchHead sectionTime={this.state.sectionTime} totalTime={this.state.totalTime}></WatchHead>
                <WatchControl startWatch={()=>this.startWatch()} stopWatch={()=>this.stopWatch()}
                    addRecord={()=>this.addRecord()} clearRecord={()=>this.clearRecord()}></WatchControl>
                <WatchRecord record={this.state.record}></WatchRecord>
            </View>
        );
    }

    startWatch() {
        if (this.state.resetWatch) {
            this.setState({
                stopWatch: false,
                resetWatch: false,
                timeAccumulation:0,
                initialTime: (new Date()).getTime()
            });
        }else{
            this.setState({
                stopWatch: false,
                initialTime: (new Date()).getTime()
            });
        }
        let milSecond, second, minute, countingTime,
            secmilSecond, secsecond, secminute, seccountingTime;
        let interval = setInterval(() => {
            this.setState({
                currentTime: (new Date()).getTime()
            });
            countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
            minute = Math.floor(countingTime/1000/60);
            second = Math.floor((countingTime - minute*60000)/1000);
            milSecond = Math.floor(countingTime%1000/10);
            seccountingTime = countingTime - this.state.recordTime;
            secminute = Math.floor(seccountingTime/(60*1000));
            secsecond = Math.floor((seccountingTime-60000*secminute)/1000);
            secmilSecond = Math.floor((seccountingTime%1000)/10);
            this.setState({
                totalTime: (minute<10? "0"+minute:minute)+":"+ (second<10? "0"+second:second)+"."+
                    (milSecond<10? "0"+milSecond:milSecond),
                sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+
                    (secmilSecond<10? "0"+secmilSecond:secmilSecond)
            });
            if (this.state.stopWatch) {
                this.setState({
                    timeAccumulation: countingTime,
                });
                clearInterval(interval)
            }
        }, 100);
    }

    stopWatch() {
        this.setState({
            stopWatch: true
        });
    }

    addRecord() {
        let {recordCounter, record} = this.state;
        recordCounter++;
        record.unshift({title:"计次"+recordCounter, sectionTime: this.state.sectionTime, time:this.state.totalTime});
        this.setState({
            recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
            recordCounter: recordCounter,
            record: record
        });
    }

    clearRecord() {
        this.setState({
            stopWatch: false,
            resetWatch: true,
            initialTime: 0,
            currentTime: 0,
            recordTime: 0,
            timeAccumulation:0,
            totalTime: "00:00.00",
            sectionTime: "00:00.00",
            recordCounter: 0,
            record: []
        });
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
            startBtnText: '开 始',
            stopBtnText: '计 次',
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
                startBtnText: '停 止',
                stopBtnText: '计 次',
                startTextColor: '#cc0000',
                stopTextColor: '#606060'
            });
        } else {
            this.props.stopWatch();
            this.setState({
                startBtnText: '开 始',
                stopBtnText: '复 位',
                startTextColor: '#606060',
                stopTextColor: '#66cc00'
            });
        }
    }

    addRecord() {
        if (this.watchOn) {
            this.props.addRecord();
        } else {
            this.props.clearRecord();
            this.setState({
                stopBtnText: '计 次',
                stopTextColor: '#c0c0c0'
            });
        }
    }
}

class WatchRecord extends Component{
    static propTypes = {
        record: React.PropTypes.array.isRequired
    };

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            theDataSource = ds.cloneWithRows(this.props.record);
        return (
            <View style={styles.recordList}>
                <View style={styles.recordItem}>
                    <Text style={styles.recordItemTitle}>count</Text>
                    <Text style={[styles.recordItemTime,{textAlign:'center'}]}>sectionTime</Text>
                    <Text style={styles.recordItemTime}>totalTime </Text>
                </View>
                <ListView
                    dataSource={theDataSource}
                    renderRow={this.renderRecord}
                    enableEmptySections={true}
                />
            </View>
        );
    }

    renderRecord(record) {
        return(
            <View style={styles.recordItem}>
                <Text style={styles.recordItemTitle}>{record.title}</Text>
                <Text style={[styles.recordItemTime,{textAlign:'center'}]}>{record.sectionTime}</Text>
                <Text style={styles.recordItemTime}>{record.time}</Text>
            </View>
        );
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
    recordList:{
        width: Util.size.width,
        height: Util.size.height - 350,
        paddingLeft: 15,
        paddingRight: 15
    },
    btnStartStopText:{
        fontSize:14,
        backgroundColor:"transparent"
    },
    recordItem:{
        height: 40,
        borderBottomWidth:Util.pixel,borderBottomColor:"#bbb",
        paddingTop: 5, paddingLeft: 10, paddingRight:10, paddingBottom:5,
        flexDirection:"row",
        alignItems:"center"
    },
    recordItemTitle:{
        flex:1,
        textAlign:"left",
        color:"#777"
    },
    recordItemTime:{
        flex:1,
        textAlign:"right",
        color:"#222"
    }
});
