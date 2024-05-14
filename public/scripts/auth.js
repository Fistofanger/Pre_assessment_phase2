const registartionForm = document.querySelector('.Registration');
const authorizationForm = document.querySelector('.Authorization');

const formUpdateProfile = document.querySelector('.FormUpdateProfile');

if (registartionForm) {
  registartionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { userName, password, email, avatar } = e.target;

    if (
      userName.value.trim() === '' ||
      password.value.trim() === '' ||
      email.value.trim() === ''
    ) {
      alert('Заполните все поля');
      return;
    }

    const reqData = new FormData();

    reqData.append('userName', userName.value);
    reqData.append('password', password.value);
    reqData.append('email', email.value);
    reqData.append('avatar', avatar.files[0]);

    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      body: reqData,
    });
    const data = await res.json();

    // console.log(data);

    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}

if (authorizationForm) {
  authorizationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { password, email } = event.target;

    if (password.value.trim() === '' || email.value.trim() === '') {
      alert('Заполните все поля');
      return;
    }

    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        password: password.value,
        email: email.value,
      }),
    });

    const data = await res.json();

    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      alert('Неверные данные');
    }
  });
}

if (formUpdateProfile) {
  formUpdateProfile.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { userName, email, avatar } = event.target;
    const { userid } = event.target.dataset;

    // console.log(userName.value, email.value, avatar);
    // console.log(userid);

    if (userName.value.trim() === '' || email.value.trim() === '') {
      alert('Заполните все поля');
      return;
    }

    const reqData = new FormData();

    reqData.append('userName', userName.value);
    reqData.append('email', email.value);
    reqData.append('avatar', avatar.files[0]);

    const res = await fetch(`/api/auth/${userid}/update`, {
      method: 'PUT',
      body: reqData,
    });

    const data = await res.json();

    if (data.message === 'success') {
      window.location.assign(`/profile/${userid}`);
    }
  });
}
