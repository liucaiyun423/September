const mongoose = require('mongoose');
const keys = require('../config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
require("../models");
const Survey = mongoose.model('surveys');

Survey.paginate({}, { page: 3, limit: 2 }).then(console.log);


