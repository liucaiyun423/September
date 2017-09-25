import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions'

const Dashboard = ()=> <h2>Dashboard</h2>;
const SurveyNew = ()=> <h2>SurveyNew</h2>;
const Landing = ()=> <h2> Landing</h2>;

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
                        <Route path="/dashboard" component={Dashboard}></Route>
                        <Route path="/surveys" component={SurveyNew}></Route>
                        <Route path="/surveys/new" component={Landing}></Route>
                    </div>
                </BrowserRouter>
            </div>)
    }
}
export default connect(null, actions)(App);