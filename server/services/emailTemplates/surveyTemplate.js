const keys = require('../../config/keys');

module.exports = (survey)=>{
    return `
            <html>
                <body>
                    <div style="text-align:center;">
                        <h3> I'd like your input</h3>
                        <p> Please answer the following quesiton: </p>
                        <p> ${survey.subject}</p>
                        <div><a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a></div>
                        <div><a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a></div>
                    </div>
                </body>
            </html>
            `
}