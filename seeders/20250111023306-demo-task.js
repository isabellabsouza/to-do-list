'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Fazer alguma coisa para o trabalho',
        description: "trabalho trabalho trabalho",
        date: new Date(),
        status: 'Em andamento',
        userId: 1,
        typeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fazer alguma coisa para a escola',
        description: "escola escola escola",
        date: new Date(),
        status: 'Concluído',
        userId: 1,
        typeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
