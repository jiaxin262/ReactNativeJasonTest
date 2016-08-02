/**
 * Created by xin.jia
 * since 2016/7/26
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import TodoApp from '../containers/TodoApp';

var TODOS = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {text: 'aaaaaaa', complete: false},
        {text: 'bbbbbbbb', complete: false},
        {text: 'aaafadf', complete: false},
        {text: 'aaagssdfg', complete: false},
        {text: 'aaawer', complete: false}
    ]
};

export default class ReduxTest extends Component {
    render() {
        return(
            <TodoApp todos={TODOS.todos}/>
        );
    }
}

const styles = StyleSheet.create({
    
});
