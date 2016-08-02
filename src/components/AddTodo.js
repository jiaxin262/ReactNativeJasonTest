/**
 * Created by xin.jia
 * since 2016/8/1
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Util from '../util/utils';

export default class AddTodo extends Component{
    render() {
        return(
            <View style={styles.addContainer}>
                <TextInput style={styles.textInput}
                    multiline={true}
                    placeholder="type a todo item"/>
                <Text>add</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        fontSize: 20,
        width:Util.size.width-50
    }
});