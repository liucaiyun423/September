const requireLogin = require('../middlewares/requireLogin');
const requireCredit = require('../middlewares/requireCredits');
require('../models');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const SurveyMailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const _ = require('lodash');
const Path = require("path-parser");
const {URL} = require('url');

module.exports = (app)=> {

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        console.log("'/api/surveys/:surveyId/:choice", req.body);
        res.send('Thanks for voting!');
    });

    app.post('/api/surveys/webhooks', (req,res)=>{
        const events = _.map(req.body, (event)=>{
           const pathname = new URL(event.url).pathname;
           const p = new Path("/api/surveys/:surveyId/:choice");
           const match = p.test(pathname);
           if(match){
               return {email: event.email, surveyId: match.surveyId, choice: match.choice};
           }
        });
        const compactEvents = _.compact(events);
        const uniqEvents = _.uniqBy(compactEvents, 'surveyId','choice');
        res.send(200);
    });

    app.post('/api/surveys', requireCredit, async (req, res)=>{
        const {title, subject, recipients} = req.body;
        const survey = new Survey({
            title,
            subject,
            recipients: recipients.split(',').map(email=>{ return {email: email.trim()}}),
        });
        const mailer = new SurveyMailer(survey, surveyTemplate(survey));
        try{
            await mailer.send();
            console.log("mailed sent ");
            await survey.save();
            console.log("survey saved ");
            req.user.credits -= 1;
            const user = await req.user.save();
            console.log("user updated");
            res.send(user);
        }catch(err){
            console.log("!!!!!!!!!!!!! error caught in route handler");
            res.status(422).send(err);
        }   
    });
    
}