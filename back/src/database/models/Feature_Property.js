module.exports = function(sequelize, DataTypes){
    const alias = "Feature_Property"
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        property_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        feature_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    }
    const config = {
        tableName: "feature_property",
        timestamps: false,
    }

    const Feature_Property = sequelize.define(alias, cols, config);

    Feature_Property.associate = (models) => {
        Feature_Property.belongsTo(models.Property, {
            as: 'property',
            foreignKey: 'property_id'
        })

        Feature_Property.belongsTo(models.Feature, {
            as: 'feature',
            foreignKey: 'feature_id'
        })
    }

    return Feature_Property
}



