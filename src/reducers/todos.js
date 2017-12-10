import constants from '../constants';

let nextTodoId = 0;

const todos= (state, action) => {
    switch(action.type) {
        case constants.ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    id: nextTodoId++,
                    text
                }
            ]
        case constants.TOGGLE_TODO:
            return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
        default:
            return todo
    }
}

export default todos;