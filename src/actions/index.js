import constants from '../constants';

let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: constants.ADD_TODO,
        id: nextTodoId,
        text
    }
}

export const toggleTodo = id => {
    return {
        type: constants.TOGGLE_TODO,
        id
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: constants.SET_VISIBILITY_FILTER,
        filter
    }
}