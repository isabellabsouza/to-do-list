'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {

        static associate(models) {
            
            //Cada tarefa pertence a um usuário
            Task.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            });
        

            //Cada tarefa tem um tipo
            Task.belongsTo(models.Type, {
                foreignKey: 'typeId',
                as: 'type'
            });
        }
    }

Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATEONLY,
    status: DataTypes.ENUM('Não iniciado', 'Em andamento', 'Concluído'),
}, {
    sequelize,
    modelName: 'Task',
});
return Task;
};