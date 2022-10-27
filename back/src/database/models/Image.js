module.exports = function(sequelize, DataTypes){
    const alias = "Image"
    const cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false
        },      
        property_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }, 
        home_portrait: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        detail_portrait: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    const config = {
        tableName: "image",
        timestamps: false,
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models) => {
        Image.belongsTo(models.Property, {
            as: 'property',
            foreignKey: 'property_id'
        })
    }

    return Image
}