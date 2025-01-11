'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {
            //Cada usuário tem muitas tarefas
            User.hasMany(models.Task, {
                foreignKey: 'userId',
                as: 'tasks'
            })
        }
    }
    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};