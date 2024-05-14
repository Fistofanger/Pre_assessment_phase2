const React = require('react');

function ProductCard({ productData, user }) {
  return (
    <div className="ProductCard flex-column" data-productid={productData.id}>
      <h2>{productData.productTitle}</h2>

      <img src={productData.productImage} alt="productImage" />
      <p>vendor: {productData.productVendor}</p>
      <p>price: {productData.productPrice}</p>
      <p>quantity: {productData.productQuantity}</p>
      <div className="btns-tea flex">
        {user && user.id === productData.userId && (
          <button type="button" className="btn-del">
            Delete card
          </button>
        )}
        {user && user.id === productData.userId && (
          <div>
            <button type="button" className="btn-edit">
              <a href={`/catalog/update/${productData.id}`}>Edit card</a>
            </button>
          </div>
        )}
      </div>

      <div className="linksTeaCard flex">
        {/* {user.Favorites.find(({ teaId }) => teaId === teaData.id) ? (
          <p>❤️️</p>
        ) : (
          <p>♡</p>
        )} */}
        {/* <a href={`/teas/${teaData.id}`}>Подробнее</a>
        <a href={`/teas/${teaData.id}`}>
          Комментарии({teaData.Comments.length})
        </a> */}
      </div>
    </div>
  );
}

module.exports = ProductCard;
