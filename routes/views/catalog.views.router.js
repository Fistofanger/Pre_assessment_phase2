const router = require('express').Router();

const CatalogPage = require('../../components/CatalogPage.jsx');
// const TeaPage = require('../../components/TeaPage.jsx');
const FormAddProduct = require('../../components/FormAddProduct.jsx');
const FormUpdateProduct = require('../../components/FormUpdateProduct.jsx');
const NotFound = require('../../components/NotFound.jsx');
const { Product, User } = require('../../db/models/index.js');

router.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const productDataArray = await Product.findAll({
      order: [['id', 'ASC']],
    });

    res.send(
      res.renderComponent(CatalogPage, {
        productDataArray,
        title: 'Catalog Page',
        user,
      })
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// router.get('/:teaid', async (req, res) => {
//   try {
//     const { user } = res.locals;

//     const { teaid } = req.params;
//     const teaData = await Tea.findOne({
//       where: { id: teaid },
//       include: {
//         model: Comment,
//         include: { model: User },
//       },
//       // include: [{ model: Like }, { model: Like, include: [{ model: User }] }],
//       // order: [['id', 'ASC']],
//     });

//     console.log(teaData);

//     if (teaData) {
//       res.send(
//         res.renderComponent(TeaPage, { teaData, title: 'Tea Page', user })
//       );
//       return;
//     }
//     res.send(res.renderComponent(NotFound, { title: '404' }));
//   } catch ({ message }) {
//     res.status(500).json('Ошибочка');
//   }
// });

router.get('/update/:productId', async (req, res) => {
  try {
    const { user } = res.locals;
    const { productId } = req.params;

    const productData = await Product.findOne({ where: { id: productId } });

    const result = res.renderComponent(FormUpdateProduct, {
      productData,
      title: 'Product Edit Page',
      user,
    });
    if (result) {
      res.send(result);
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
