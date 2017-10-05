const requireLogin = require('../middlewares/requireLogin');
const requireCredit = require('../middlewares/requireCredits');
require('../models');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const SurveyMailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = (app)=> {
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
            console.log("use updated");
            res.send(user);
        }catch(err){
            console.log("!!!!!!!!!!!!! error caught in route handler");
            res.status(422).send(err);
        }
        
    })
}