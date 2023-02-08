module.exports = function(sequelize, DataTypes){
    const alias = "Property"
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        zone: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        video: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        category_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        keyword: {
            type: DataTypes.TEXT,
            allowNull: false            
        }, 
        map_url: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        portrait_url: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }
    const config = {
        tableName: "property",
        timestamps: false,
    }

    const Property = sequelize.define(alias, cols, config);

    Property.associate = (models) => {
        Property.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })

        Property.belongsToMany(models.Feature, {
            through: 'feature_property'
        })

        Property.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'property_id'
        })
    }

    return Property
}



