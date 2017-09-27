const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripSecretKey);

module.exports = (app) => {
    app.post('/api/stripe', 
       async (req,res)=>{
           const charge = await stripe.charges.create({
               amount: 500,
               currency: 'usd',
               description: '5 dollars for 5 credits',
               source: req.body.token.id
           });  
           console.log("billing token: " ,req.body.token);
           console.log("charge object: ", charge);
        });
}