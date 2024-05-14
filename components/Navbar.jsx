const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      {user ? (
        <div className="navbar">
          <div className="link">
            <a href="/">Главная</a>
          </div>
          <div className="link">
            <a href="/catalog">Каталог товаров</a>
          </div>
          <div className="link">
            <a href="/cart">Корзина</a>
          </div>
          <div className="link">
            {` Привет
              ${user.userName}`}
          </div>
          <div className="link">
            <a href={`/profile/${user.id}`}>Профиль</a>
          </div>
          <div className="link">
            <a href="/logout">Выход</a>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="link">
            <a href="/">Главная</a>
          </div>
          <div className="link">
            <a href="/catalog">Каталог товаров</a>
          </div>
          <div className="link">
            <a href="/auth/authorization">Авторизация</a>
          </div>
          <div className="link">
            <a href="/auth/registration">Регистрация</a>
          </div>
        </div>
      )}
    </nav>
  );
}

module.exports = Navbar;
