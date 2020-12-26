import React from 'react';
import { connect, useDispatch } from 'react-redux';

import {removeArticle} from '../actions';

const mapStateToProps = state => {
    return {articles: state.articles};
}


const List = ({articles}) => {
    const dispatch = useDispatch();

    const removeHandler = (id) => dispatch(removeArticle(id));

    return(
        <ul className="list-group list-group-flush">
            {articles.map(el => (
            <li className="list-group-item"
            key={el.id}
            onClick={() => removeHandler(el.id)} >
                {el.title}
            </li>
            ))}
        </ul>
    );
};
export default connect(mapStateToProps)(List);