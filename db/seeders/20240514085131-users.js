'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'Seller',
        email: 'seller@mail',
        password:
          '$2b$10$OJKj6fSyahKD3sqUykjyWusLr3xCC9Wxr1SbnDRBCuu7sZTAISCIe',
        role: 'seller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Buyer',
        email: 'buyer@mail',
        password:
          '$2b$10$OJKj6fSyahKD3sqUykjyWusLr3xCC9Wxr1SbnDRBCuu7sZTAISCIe',
        role: 'buyer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
