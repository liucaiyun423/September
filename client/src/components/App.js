import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

//view setup
class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div className='container'>
                        <Header/>
                        <Route path="/" component={Landing}></Route>
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Route path="/surveys/new" component={SurveyNew}></Route>   
                    </div>
                </BrowserRouter>
            </div>)
    }
}
//Connects a React component to a Redux store.
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(null, actions)(App);
//actions is passed so that App component can call fetchUser() in componentDidMount; 