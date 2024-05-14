const router = require('express').Router();

const ProductCard = require('../../components/ProductCard.jsx');

const { Product, Comment } = require('../../db/models/index.js');

router.post('/', async (req, res) => {
  try {
    const { id, role } = res.locals.user;
    const {
      productTitle,
      productVendor,
      productDescription,
      productImage,
      productPrice,
      productQuantity,
    } = req.body;

    const ProductInDBWithProductName = await Product.findOne({
      where: { productTitle: productTitle },
    });

    if (ProductInDBWithProductName) {
      res.status(400).json('This product already exist');
      return;
    }

    const post = await Product.create({
      productTitle,
      productVendor,
      productDescription,
      productImage,
      productPrice,
      productQuantity,
      userId: id,
    });

    if (post) {
      const card = res.renderComponent(
        ProductCard,
        { productData: post },
        { doctype: false }
      );
      res.status(201).json({ message: 'success', card });
      return;
    }
    res.status(400).json({ error: message });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    const result = await Product.destroy({
      where: { id: productId, userId: res.locals.user.id },
    });
    if (result) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put('/update/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const {
      productTitle,
      productVendor,
      productDescription,
      productImage,
      productPrice,
      productQuantity,
    } = req.body;

    const result = await Product.update(
      {
        productTitle,
        productVendor,
        productDescription,
        productImage,
        productPrice,
        productQuantity,
      },
      { where: { id: productId, userId: res.locals.user.id } }
    );

    if (result[0]) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
