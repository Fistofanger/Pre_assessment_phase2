const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      {user ? (
        <div className="navbar">
          <div className="link">
            <a href="/">Main page</a>
          </div>
          <div className="link">
            <a href="/catalog">Catalog</a>
          </div>
          <div className="link">
            <a href="/cart">Cart</a>
          </div>
          <div className="link">
            {` Hello
              ${user.userName}`}
          </div>
          <div className="link">
            <a href={`/profile/${user.id}`}>Profile</a>
          </div>
          <div className="link">
            <a href="/logout">Logout</a>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="link">
            <a href="/">Main page</a>
          </div>
          <div className="link">
            <a href="/catalog">Catalog</a>
          </div>
          <div className="link">
            <a href="/auth/authorization">Authorization</a>
          </div>
          <div className="link">
            <a href="/auth/registration">Registration</a>
          </div>
        </div>
      )}
    </nav>
  );
}

module.exports = Navbar;
