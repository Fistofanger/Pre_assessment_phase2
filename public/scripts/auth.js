const registartionForm = document.querySelector('.Registration');
const authorizationForm = document.querySelector('.Authorization');

if (registartionForm) {
  registartionForm.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      const { userName, password, email, roleSelect } = e.target;
      
      if (roleSelect.value === '') {
        alert('Select your role');
        return;
      }

      if (password.value.includes(' ')) {
        alert('No space in password');
        return;
      }

      if (
        userName.value.trim() === '' ||
        password.value.trim() === '' ||
        email.value.trim() === ''
      ) {
        alert('Enter all inputs');
        return;
      }

      const res = await fetch('/api/auth/registration', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName.value,
          password: password.value,
          email: email.value,
          role: roleSelect.value,
        }),
      });

      const data = await res.json();

      if (data.message === 'success') {
        window.location.assign('/');
      }
    } catch ({ message }) {
      alert(`Error: ${message}`);
    }
  });
}
if (authorizationForm) {
  authorizationForm.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      const { password, email } = e.target;

      if (password.value.includes(' ')) {
        alert('No space in password');
        return;
      }

      if (password.value.trim() === '' || email.value.trim() === '') {
        alert('Enter all inputs');
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
        alert('Wrong data, enter correct information');
      }
    } catch ({ message }) {
      alert(`Error: ${message}`);
    }
  });
}
