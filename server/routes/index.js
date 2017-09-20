var models = require('../models/index');
module.exports = (app) => {
  require('./users')(app);
  require('./api')(app);
}