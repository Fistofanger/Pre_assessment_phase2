'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        productTitle: 'Carrot',
        productVendor: 'Bill',
        productDescription:
          'The carrot is a root vegetable, typically orange in color, though heirloom variants including purple, black, red, white, and yellow cultivars exist,[2][3][4] all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. ',
        productImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/1920px-Vegetable-Carrot-Bundle-wStalks.jpg',
        productPrice: '100',
        productQuantity: '200',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productTitle: 'Cabbage',
        productVendor: 'Bill',
        productDescription:
          'Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads.',
        productImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/1920px-Cabbage_and_cross_section_on_white.jpg',
        productPrice: '50',
        productQuantity: '300',
        userId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
