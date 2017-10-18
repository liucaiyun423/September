const mongoose = require('mongoose');
const keys = require('../config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
require("../models");
const Survey = mongoose.model('surveys');
const Chance = require('chance');
const chance = new Chance(12345);

const _user = "59ce8d7dd08de941be6c6591";
const numOfSurveys = 10;
for(let n = 1; n<= numOfSurveys; n++){
    let recipients = [{email: chance.email({domain: "example.com"})}, 
                    {email: chance.email({domain: "example.com"})}, 
                    {email: chance.email({domain: "example.com"})}];
    let subject =  chance.string();
    let title = chance.string();
    const survey = new Survey({title: title + n, subject: subject + n, recipients, _user}).save();
    console.log("survey created with id ", survey.id);
}
mongoose.disconnect();
