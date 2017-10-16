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
            return (
                <tbody>
                    <tr>
                        <td>{survey.title}</td>
                        <td>{survey.subject}</td>
                        <td>{survey.yes}</td>
                        <td>{survey.no}</td>
                        <td>{survey.recipients.map(({email}) => email)}</td>
                    </tr>
                </tbody>
            )
        })
    }
    render(){
        return (<table>
                     <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Title</th>
                            <th>Yes</th>
                            <th>No</th>
                            <th>Recipients</th>
                        </tr>
                    </thead>
                    {this.renderSurveys()}
                </table>);
    }
} 
function mapStateToProps({surveys}){
    return {
        surveys
    }
}
export default connect(mapStateToProps,{ fetchSurveys })(SurveyList);

