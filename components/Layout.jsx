const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, user, children }) {
  return (
    <html lang="ru">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/form.css" />
        <link rel="stylesheet" href="/css/navbar.css" />
        <script defer src="/scripts/product.js" />
        <script defer src="/scripts/auth.js" />
        {/* <script defer src="/scripts/comment.js" /> */}
      </head>
      <body className="flex-column">
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
