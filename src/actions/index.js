import * as actionTypes from '../constants/action-types';

export const addArticle = article => ({
    type: actionTypes.ADD_ARTICLE,
    payload: article
});

export const removeArticle = id => ({
    type: actionTypes.REMOVE_ARTICLE,
    id: id
});