/* GET users listing. */
models = require('../models/index');
module.exports = (app) => {
  app.get('/users', function(req, res, next) {
    res.send('respond with a resource');
  });
  app.post('/users', function(req, res) {
    models.User.create({
      email: req.body.email
    }).then(function(user) {
      res.json(user);
    });
  });
}