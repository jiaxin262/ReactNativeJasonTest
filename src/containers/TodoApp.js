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
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilter} from '../actions/TodoActions';

export default class TodoApp extends Component{
    render() {
        const {todos} = this.props;
        return(
            <View>
                <AddTodo/>
                <TodoList todos={todos}/>
            </View>
        );
    }
}