const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
    constructor({subject, recipients}, content){
        console.log("......", recipients);
        super();
        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.addContent(this.body);
        console.log("added content");
        this.addClickTracking();
        this.addRecipients(this.formatAddresses(recipients));
    }
    formatAddresses(recipients){
        return recipients.map(({email}) => {
            return new helper.Email(email);
        })
    }

    addClickTracking(){
        const trackingSettings =  new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients(recipients){
        const personalize = new helper.Personalization();
        recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }
    async send(){
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        try{
            const response = await this.sgApi.API(request);
            return response;
        }catch(err) {
            throw err;
            console.log("thrown");
        }
    }
}   
module.exports = Mailer;