'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        }, 
        mail: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        }, 
        password: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        },
        role: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
};