const requireLogin = require('../middleware/requireLogin');
const requireCredit = require('../middleware/requireCredits');
module.exports = (app)=> {
    app.post('/api/surveys', requireLogin, requireCredit, (req, res)=>{

    })
}