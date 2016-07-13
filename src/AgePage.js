/**
 * Created by xin.jia
 * since 2016/7/13
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class AgePage extends Component {
    _back() {
        this.props.navigator.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to AgePage! {this.props.name}</Text>
                <TextInput
                    onChangeText={age => this.props.changeMyAge(age) }
                    placeholder={'Enter your age:'}
                    style={styles.editText} />
                <TouchableOpacity onPress={this._back.bind(this)}>
                    <Text style={styles.text}>Save my age</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    editText: {
        height: 40,
        width: 200
    },
    text: {
        color: '#55ACEE'
    }
});