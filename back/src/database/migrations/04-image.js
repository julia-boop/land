'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('image', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        url: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false
        }, 
        property_id: {
          type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          references: {
            model: 'property',
            key: 'id'
          }
        }, 
        home_portrait: {
          type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false
        },
        detail_portrait: {
          type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false
        }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('image')
  }
};