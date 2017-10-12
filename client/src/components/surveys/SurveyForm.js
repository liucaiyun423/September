import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import formFields from './formFields';

//SurveyForm renders the form to enter user input.
class SurveyForm extends React.Component{
    renderFields(){
        return (
            _.map(formFields, ({label, name})=>{
                return <Field key={name} label={label} type='text' name={name} component={SurveyField}/>
            })
        );
    }
    render(){
        return (<div>
                    <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}> 
                        {this.renderFields()}
                        <Link to='/surveys'  className='red  btn-flat left white-text'>
                            Cancel
                        </Link>
                        <button type='submit' className='teal btn-flat right white-text'>
                            NEXT
                            <i className='material-icons right' >done</i>
                        </button>
                     </form>
                </div>)
    }
}
function validate(values){
    let errors= {};
    return errors;
}
//Creates a decorator with which you use redux-form to connect your form component to Redux.
export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
    })(SurveyForm);