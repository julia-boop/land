'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('property', {
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
        description: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false
        }, 
        zone: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        country: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        price: {
          type: Sequelize.DataTypes.INTEGER(10),
          allowNull: true
        },
        video: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: true
        },
        category_id: {
          type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          allowNull: false,
          references: {
            model: 'category',
            key: 'id'
          }
        },
        keyword: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false
        },
        map_url: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('property')
  }
};