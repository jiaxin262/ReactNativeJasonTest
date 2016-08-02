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
import Todo from './Todo';

export default class TodoList extends Component{
    constructor() {
        super();
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }

    render(){
        return(
            <ListView
                dataSource={this.dataSource.cloneWithRows(this.props.todos)}
                renderRow={this.renderTodo}/>
        );
    }

    renderTodo(todo) {
        return(
            <Todo todo={todo}/>
        );
    }
}