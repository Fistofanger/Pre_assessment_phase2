const React = require('react');

function FormAddProduct() {
  return (
    <form action="/api/catalog" method="POST" className="FormAddProduct">
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="vendor" name="vendor" />
      <input type="text" placeholder="description" name="description" />
      <input type="text" placeholder="linkToPhoto" name="image" />
      <input type="text" placeholder="price" name="price" />
      <input type="text" placeholder="quantity" name="quantity" />
      <button type="submit">Добавить товар</button>
    </form>
  );
}

module.exports = FormAddProduct;
