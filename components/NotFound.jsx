const React = require('react');
const Layout = require('./Layout');

function NotFound({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="NotFound flex-column">
        <h1>Page not found</h1>
        <img
          src="/img/404img.jpg"
          alt="NotFound logo"
          className="NotFoundLogo"
        />
      </div>
    </Layout>
  );
}

module.exports = NotFound;
