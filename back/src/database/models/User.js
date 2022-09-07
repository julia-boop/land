module.exports = function(sequelize, DataTypes){
    const alias = "User"
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
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        name: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    const config = {
        tableName: "user",
        timestamps: false,
    }

    const User = sequelize.define(alias, cols, config);

    return User
}