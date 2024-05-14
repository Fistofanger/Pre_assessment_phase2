// const FormEditPost = document.querySelector('.FormUpdatePost');
const formAddTea = document.querySelector('.FormAddTea');
const formUpdateTea = document.querySelector('.FormUpdateTea');
const Teas = document.querySelector('.Teas');

if (formAddTea) {
  formAddTea.addEventListener('submit', async (e) => {
    e.preventDefault();

    const {
      action,
      method,
      teaName,
      teaImg,
      teaType,
      teaLocation,
      teaRegion,
      teaDescription,
    } = e.target;

    const reqData = new FormData();

    reqData.append('teaName', teaName.value);
    reqData.append('teaImg', teaImg.files[0]);
    reqData.append('teaType', teaType.value);
    reqData.append('teaLocation', teaLocation.value);
    reqData.append('teaRegion', teaRegion.value);
    reqData.append('teaDescription', teaDescription.value);

    const result = await fetch(action, {
      method,
      body: reqData,
    });
    const response = await result.json();

    if (response.message === 'success') {
      Teas.insertAdjacentHTML('beforeend', response.card);
      formAddTea.reset();
    }
  });
}

if (formUpdateTea) {
  formUpdateTea.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { teaName, teaImg, teaType, teaLocation, teaRegion, teaDescription } =
      e.target;
    const { teaid } = e.target.dataset;

    const reqData = new FormData();

    reqData.append('teaName', teaName.value);
    reqData.append('teaImg', teaImg.files[0]);
    reqData.append('teaType', teaType.value);
    reqData.append('teaLocation', teaLocation.value);
    reqData.append('teaRegion', teaRegion.value);
    reqData.append('teaDescription', teaDescription.value);

    const res = await fetch(`/api/teas/update/${teaid}`, {
      method: 'PUT',
      body: reqData,
    });

    const data = await res.json();

    if (data.message === 'success') {
      window.location.assign('/teas');
    }
  });
}

if (Teas) {
  Teas.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-del')) {
      const confirmDel = confirm('Вы точно хотите удалить этот чай?');
      if (confirmDel) {
        const card = e.target.closest('.TeaCard');

        const { teaid } = card.dataset;

        const res = await fetch(`/api/teas/${teaid}`, {
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
