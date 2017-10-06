import React from 'react';
import { reduxForm, Field } from 'redux-form';

export default ({input,label})=>{
    return (<div>
                <label>{label}</label>
                <input {...input}/>
            </div>);
}