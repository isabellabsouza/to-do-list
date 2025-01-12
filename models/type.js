'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Type extends Model {
        //Cada tipo tem muitas tarefas
        static associate(models) {
            Type.hasMany(models.Task, {
                foreignKey: 'typeId',
                as: 'tasks'
            })
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