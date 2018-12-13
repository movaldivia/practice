'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Searches',
      'EmployerId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references:{
          model: 'Employers',
          key: 'id'
        }
      }
    ).then(() => {
      return queryInterface.addColumn(
        'Employers',
        'SearchId',
        {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          allowNull: false,
          references:{
            model: 'Searches',
            key: 'id'
          }
        }
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Searches',
      'EmployerId'
    ).then(()=> {
      return queryInterface.removeColumn(
        'Employers',
        'SearchId',
      )
    }
    )
  }
};
