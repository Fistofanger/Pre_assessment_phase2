'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Product.init(
    {
      productTitle: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      productVendor: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      productDescription: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      productImage: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      productPrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      productQuantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
