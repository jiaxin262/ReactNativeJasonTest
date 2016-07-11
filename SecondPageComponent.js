import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我回到第一页</Text>
                </TouchableOpacity>
            </View>
        );
    }
    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

}