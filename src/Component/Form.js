import React from 'react';
import  uuid  from 'react-uuid';
import { useDispatch } from 'react-redux';

import { useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message'

import { addArticle } from '../actions'; 



const Form = () => {
    const {register, handleSubmit, reset, errors} = useForm({
        criteriaMode : "all"
        // Needed for multiple ErrorMessages
    });
    const dispatch = useDispatch();
    // Hook for functionalcomponent

    const onSubmit = data => {
    const id = uuid();
    dispatch(addArticle({title: data.Article, id}))
    reset();
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-group">
                <label htmlFor="Article-Name">Form</label>
                <input 
                placeholder="Add an Article.."
                className="form-control"
                name="Article" // Important! Stores the value
                type="text"
                ref={register({
                    required: "This is required and numbers only.",
                    pattern: {
                        value: /^\d+$/,
                        message: "This input is numbers only."
                    },
                    maxLength: {
                        value: 15,
                        message: "The maxlength exceeds 15."
                    },
                    minLength: {
                        value: 3,
                        message: "At least 3 characters and numbers only."
                    }
                })}
              />

              <ErrorMessage errors={errors} name="Article">
                    {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                    <p key={type} >{message}</p>
                ))
                }
              </ErrorMessage>
              
            </div>
            <button type="submit" className="btn btn-success btn-lg" >SAVE</button>
        </form>
    );
};



export default (Form);

