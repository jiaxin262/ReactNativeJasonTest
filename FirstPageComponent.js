import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';
import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳转到第二页</Text>
                </TouchableOpacity>
            </View>
        );
    }
    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    }

}