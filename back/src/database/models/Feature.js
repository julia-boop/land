module.exports = function(sequelize, DataTypes){
    const alias = "Feature"
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        }
    }
    const config = {
        tableName: "feature",
        timestamps: false,
    }

    const Feature = sequelize.define(alias, cols, config);

    Feature.associate = (models) => {
        Feature.belongsToMany(models.Property, {
            through: 'feature_property'
        })
    }

    return Feature
}



