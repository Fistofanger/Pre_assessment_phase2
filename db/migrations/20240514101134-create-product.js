'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productTitle: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      productVendor: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      productDescription: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      productImage: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      productPrice: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      productQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
