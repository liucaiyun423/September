import React from 'react';
import { Link } from 'react-router-dom';
import PaginatedSurveyList from './surveys/PaginatedSurveyList';

const Dashboard = ()=>{
    return (
            <div>
                <PaginatedSurveyList/>
                <div className="fixed-action-btn">
                    <Link to='/surveys/new' className="btn-floating btn-large red">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
    );
}

export default Dashboard;
