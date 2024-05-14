const React = require('react');
const Layout = require('./Layout');
const FormAddTea = require('./FormAddProduct');
// const TeaCard = require('./TeaCard');

function TeasPage({ title, user, teaDataArray }) {
  return (
    <Layout title={title} user={user}>
      <h1>Чайная карта</h1>
      {user ? (
        <FormAddTea />
      ) : (
        <p>
          ☝️ Для добавления своего любимого чая необходимо зарегистрироваться
          или авторизироваться{' '}
        </p>
      )}
      <div className="Teas grid">
        {teaDataArray.map((teaData) => (
          <TeaCard teaData={teaData} user={user} key={teaData.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = TeasPage;
