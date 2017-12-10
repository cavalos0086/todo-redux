import constants from '../constants';

const visibilityFilter = (state = '', action) => {
    switch (action.type) {
        case constants.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;