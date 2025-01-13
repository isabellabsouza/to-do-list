'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Terminar relatório de vendas',
        description: 'O relatório de vendas tem que ter os dados dos clientes, produtos e vendas.',
        date: new Date(),
        status: 'Não iniciado',
        userId: 1,
        typeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Estudar para a prova',
        description: 'Conteúdos: funções quadráticas, polinômios, frações. Capítulo 4 e 5 da apostila.',
        date: new Date(),
        status: 'Em adamento',
        userId: 1,
        typeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Projeto de ciências',
        description: 'Comprar materiais: cartolina, cola quente e EVA.',
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
