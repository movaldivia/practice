'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      portuguese: {
        type: Sequelize.STRING
      },
      spanish: {
        type: Sequelize.STRING
      },
      otherLanguages: {
        type: Sequelize.STRING
      },
      technicalOne: {
        type: Sequelize.STRING
      },
      technicalTwo: {
        type: Sequelize.STRING
      },
      yearsExpirence: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      english: {
        type: Sequelize.STRING
      },
      Lastexpirence: {
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
    return queryInterface.dropTable('Users');
  }
};