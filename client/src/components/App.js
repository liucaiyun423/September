import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = ()=> <h2>Dashboard</h2>;
const SurveyNew = ()=> <h2>SurveyNew</h2>;
const Landing = ()=> <h2> Landing</h2>;

//view setup
const App = ()=>{
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
        </div>
    )
}
export default App;