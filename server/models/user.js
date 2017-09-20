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