'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('feature', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('feature')
  }
};