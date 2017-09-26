import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions'
import Landing from './Landing'

const Dashboard = ()=> <h2>Dashboard</h2>;
const SurveyNew = ()=> <h2>SurveyNew</h2>;

//view setup
class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                         <Route path="/" component={Landing}></Route>
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Route path="/surveys" component={SurveyNew}></Route>   
                    </div>
                </BrowserRouter>
            </div>)
    }
}
//Connects a React component to a Redux store.
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(null, actions)(App);