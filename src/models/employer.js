'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employer = sequelize.define('Employer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Employer.associate = function(models) {
    Employer.hasMany(models.Search, {as: 'Searches'})
  };
  return Employer;
};