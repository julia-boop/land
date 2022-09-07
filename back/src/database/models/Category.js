module.exports = function(sequelize, DataTypes){
    const alias = "Category"
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
        tableName: "category",
        timestamps: false,
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.hasMany(models.Property, {
            foreignKey: 'category_id'
        })
    }

    return Category
}



