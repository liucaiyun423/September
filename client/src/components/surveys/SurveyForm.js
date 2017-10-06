import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';



const Fields = [{label: 'Title', name: 'title'},
                {label: 'Subject', name: 'subject'},
                {label: 'Body', name: 'body'},
                {label: 'Recipients List', name: 'recipients'}]
//SurveyForm renders the form to enter user input.
class SurveyForm extends React.Component{
    renderFields(){
        return (
            _.map(Fields, ({label, name})=>{
                return <Field key={name} label={label} type='text' name={name} component={SurveyField}/>
            })
        );
    }
    render(){
        return (<div>
                    <form onSubmit={this.props.handleSubmit(values => console.log("form submit handler",values))}> 
                        {this.renderFields()}
                        <button type='submit'>Submit</button>
                     </form>
                </div>)
    }
}

export default reduxForm({form: 'surveyForm'})(SurveyForm);