'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {
        title: 'Trabalho',
        color: '#CDB4DB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Escola',
        color: '#A2D2FF',
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
