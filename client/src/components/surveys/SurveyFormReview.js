import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';


const SurveyFormReview = ({onCancel, formValues, submitSurvey})=>{
    const reviewFields= 
        _.map(formFields, ({label, name})=>{
            return (<div key={name}>
                        <label>{label}</label>
                        <div>{formValues[name]}</div>
                    </div>)
        });
    return (<div>
            SurveyFormReview
                <div>
                   {reviewFields}
                </div>
                <button 
                    className='yellow btn-flat darken-3 white-text'
                    onClick={onCancel}>
                   
                Back
                </button>
                <button 
                    className='green btn-flat right white-text'
                    onClick={submitSurvey(formValues)}
                    >
                   
                Send
                <i className='material-icons right'>email</i>
                </button>
            </div>)
}
function mapStateToProps(state){
    return {
        formValues: state.form.surveyForm.values
    }
}
export default connect(mapStateToProps,actions)(SurveyFormReview);