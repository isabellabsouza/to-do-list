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

            //Cada usuário tem muitos tipos de tarefas
            User.hasMany(models.Type, {
                foreignKey: 'userId',
                as: 'types'
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