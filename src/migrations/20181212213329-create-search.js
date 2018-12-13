'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Searches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      otherLanguages: {
        type: Sequelize.STRING
      },
      spanish: {
        type: Sequelize.STRING
      },
      portuguese: {
        type: Sequelize.STRING
      },
      techicalOne: {
        type: Sequelize.STRING
      },
      technicalTwo: {
        type: Sequelize.STRING
      },
      yearsExpirence: {
        type: Sequelize.STRING
      },
      english: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Searches');
  }
};