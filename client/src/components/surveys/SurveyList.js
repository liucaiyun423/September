import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component{
    componentDidMount(){
        this.props.fetchSurveys();
    }
    renderSurveys(){
        console.log(this.props.surveys);
        return this.props.surveys.map(survey=>{
            return (<div>
                        {survey.title}
                        {survey.yes}
                        {survey.no}
                    </div>)
            
        })
    }
    render(){
        return (<div>
                    {this.renderSurveys()}
                </div>);
    }
} 
function mapStateToProps({surveys}){
    return {
        surveys
    }
}
export default connect(mapStateToProps,{ fetchSurveys })(SurveyList);

