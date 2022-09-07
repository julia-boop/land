module.exports = function(sequelize, DataTypes){
    const alias = "Image"
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
        }
    }
    const config = {
        tableName: "image",
        timestamps: false,
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models) => {
        Image.belongsTo(models.Property, {
            foreignKey: 'property_id'
        })
    }

    return Image
}