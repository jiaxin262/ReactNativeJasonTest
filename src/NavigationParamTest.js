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
import AgePage from './AgePage';

export default class NavigationParamTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            age: null
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    value={this.state.name}
                    onChangeText={name => this.setState({name})}
                    placeHolder={'Enter your name'}
                    style={styles.editText}/>
                <Text>age:{this.state.age ? this.state.age : 'unknown'}</Text>
                <TouchableOpacity onPress={this.openAgePage.bind(this)}>
                    <Text style={styles.text}>Update age</Text>
                </TouchableOpacity>
            </View>
        );
    }

    openAgePage() {
        this.props.navigator.push({
           name: 'AgePage',
           component: AgePage,
           params: {
               name: this.state.name,
               age: this.state.age,
               updateAge: age => this.setState({age}) 
           }
        });
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
