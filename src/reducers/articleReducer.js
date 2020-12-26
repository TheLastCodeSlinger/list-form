import {ADD_ARTICLE, REMOVE_ARTICLE} from '../constants/action-types';

const initialState = [];

const removeArticle = (state, action) => {
    const oldState = [...state];
    const removeArt = oldState.filter(list => list.id !== action.id);
    return (removeArt);
}

const articleReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE: return [...state, action.payload ];
        case REMOVE_ARTICLE: return removeArticle(state, action);
        default: return state;
    };
};

export default articleReducer;