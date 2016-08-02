/**
 * Created by xin.jia
 * since 2016/8/1
 */
import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Util from '../util/utils';

export default class Todo extends Component{
    render() {
        return(
            <View style={styles.item_container}>
                <Text style={styles.item_text}>{this.props.todo.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item_container: {
        justifyContent: 'center',
        height: 70,
        paddingLeft: 10,
        borderBottomWidth:Util.pixel,
        borderBottomColor:"#bbb"
    },
    item_text: {
        fontSize: 35
    }
});