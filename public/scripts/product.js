// const FormEditPost = document.querySelector('.FormUpdatePost');
const formAddProduct = document.querySelector('.FormAddProduct');
const formUpdateProduct = document.querySelector('.FormUpdateProduct');
const Products = document.querySelector('.Products');

if (formAddProduct) {
  formAddProduct.addEventListener('submit', async (e) => {
    e.preventDefault();

    const {
      action,
      method,
      title,
      vendor,
      description,
      image,
      price,
      quantity,
    } = e.target;

    if (
      title.value.trim() === '' ||
      vendor.value.trim() === '' ||
      description.value.trim() === '' ||
      image.value.trim() === '' ||
      price.value.trim() === '' ||
      quantity.value.trim() === ''
    ) {
      alert('Enter all inputs');
      return;
    }

    const result = await fetch(action, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        productTitle: title.value,
        productVendor: vendor.value,
        productDescription: description.value,
        productImage: image.value,
        productPrice: price.value,
        productQuantity: quantity.value,
      }),
    });

    const response = await result.json();

    if (response.message === 'success') {
      Products.insertAdjacentHTML('beforeend', response.card);
      formAddProduct.reset();
    }
  });
}

if (formUpdateProduct) {
  formUpdateProduct.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { title, vendor, description, image, price, quantity } = e.target;
    const { productid } = e.target.dataset;

    const result = await fetch(`/api/catalog/update/${productid}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        productTitle: title.value,
        productVendor: vendor.value,
        productDescription: description.value,
        productImage: image.value,
        productPrice: price.value,
        productQuantity: quantity.value,
      }),
    });

    const data = await result.json();

    if (data.message === 'success') {
      window.location.assign('/catalog');
    }
  });
}

if (Products) {
  Products.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-del')) {
      const confirmDel = confirm('Вы точно хотите удалить этот чай?');
      if (confirmDel) {
        const card = e.target.closest('.ProductCard');

        const { productid } = card.dataset;

        const res = await fetch(`/api/catalog/${productid}`, {
          method: 'DELETE',
        });

        const data = await res.json();

        if (data.message === 'success') {
          card.remove();
        }
      }
    }
  });
}
