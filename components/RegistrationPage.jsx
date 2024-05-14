const React = require('react');
const Layout = require('./Layout');

function RegistrationPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h2>Registartion</h2>
      <p>
        Please enter your name, email, password and select role: seller or buyer
      </p>
      <form
        action="/api/auth/registration"
        method="post"
        className="Registration"
      >
        <input
          type="text"
          placeholder="userName"
          name="userName"
          // required
          // minlength="2"
          // maxlength="32"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          // required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          // required
          // minlength="2"
          // maxlength="32"
        />
        <br />
        <select name="roleSelect" id="roleSelect">
          <option value="">-- select your role --</option>
          <option value="seller">seller</option>
          <option value="buyer">buyer</option>
        </select>
        <br />
        <button type="submit">add</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationPage;
