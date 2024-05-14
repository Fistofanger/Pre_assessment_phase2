const React = require('react');
const Layout = require('./Layout');

function FormUpdateProduct({ title, productData, user }) {
  return (
    <Layout title={title} user={user}>
      <form
        action="/api/catalog"
        method="POST"
        className="FormUpdateProduct"
        data-productId={productData.id}
      >
        <input type="text" name="title" value={productData.productTitle} />
        <input type="text" name="vendor" value={productData.productVendor} />
        <input
          type="text"
          name="description"
          value={productData.productDescription}
        />
        <input type="text" name="image" value={productData.productImage} />
        <input type="text" name="price" value={productData.productPrice} />
        <input
          type="text"
          name="quantity"
          value={productData.productQuantity}
        />
        <button type="submit">Добавить товар</button>
      </form>
    </Layout>
  );
}

module.exports = FormUpdateProduct;
