/**
 * Created by xin.jia
 * since 2016/8/1
 */

//action 类型
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//filter类型
export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

//action 创建函数
export function addTodo(text) {
    return {type: ADD_TODO, text};
};

export function completeTodo(index) {
    return {type: COMPLETE_TODO, index};
};

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter};
};
