import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Payment extends Component{
    render(){
        return (
            <StripeCheckout
                name="Dinnerful"
                description="5 credits for meal"
                amount= {500}
                token = {token => this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
            <button className='btn'>Add Credit</button>
            </StripeCheckout>
        )
    }
}
//Connects a React component to a Redux store.
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default  connect(null, actions)(Payment);
//actions is passed so Payment component can call handleToken
