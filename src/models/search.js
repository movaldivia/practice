'use strict';
module.exports = (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    otherLanguages: DataTypes.STRING,
    spanish: DataTypes.STRING,
    portuguese: DataTypes.STRING,
    techicalOne: DataTypes.STRING,
    technicalTwo: DataTypes.STRING,
    yearsExpirence: DataTypes.STRING,
    english: DataTypes.STRING,
  }, {});
  Search.associate = function(models) {
    Search.belongsTo(models.Employer);
  };
  return Search;
};