const models = require(../models/index)

module.exports = {
   Create: function(req, res){
    models.User
        .create({email: req.body.email})
        .then(function(user) {res.json(user);
    });
   }
}
