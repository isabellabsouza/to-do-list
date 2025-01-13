'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Type extends Model {
        static associate(models) {
            //Cada tipo tem muitas tarefas
            Type.hasMany(models.Task, {
                foreignKey: 'typeId',
                as: 'tasks'
            })

            //Cada tipo pertence a um usuário
            Type.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            });
        }
    }
    Type.init({
        title: DataTypes.STRING,
        color: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Type',
    });
    return Type;
};