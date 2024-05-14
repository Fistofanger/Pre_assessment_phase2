const React = require('react');
const Layout = require('./Layout');
const FormAddProduct = require('./FormAddProduct');
const ProductCard = require('./ProductCard');

function CatalogPage({ title, user, productDataArray }) {
  return (
    <Layout title={title} user={user}>
      <h1>Catalog page</h1>
      {user.role === 'seller' ? (
        <FormAddProduct />
      ) : (
        <p>☝️ Adding products is available only to users with role - seller</p>
      )}
      <div className="Products grid">
        {productDataArray.map((productData) => (
          <ProductCard
            productData={productData}
            user={user}
            key={productData.id}
          />
        ))}
      </div>
    </Layout>
  );
}

module.exports = CatalogPage;
