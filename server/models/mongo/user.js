/*
'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('User', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
*/
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = 
  new Schema({googleId : String,
              credits : {type: Number, default: 0}
            });

mongoose.model('users', userSchema);