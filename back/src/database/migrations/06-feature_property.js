'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('feature_property', {
        id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        property_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: "property",
                key: "id"
            }
        },
        feature_id: {
            type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: "feature",
                key: "id"
            }
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('feature_property')
  }
};