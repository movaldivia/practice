'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    number: DataTypes.STRING,
    portuguese: DataTypes.STRING,
    spanish: DataTypes.STRING,
    otherLanguages: DataTypes.STRING,
    technicalOne: DataTypes.STRING,
    technicalTwo: DataTypes.STRING,
    yearsExpirence: DataTypes.STRING,
    surname: DataTypes.STRING,
    english: DataTypes.STRING,
    Lastexpirence: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};