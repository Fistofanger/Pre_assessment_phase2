const router = require('express').Router();

const MainPage = require('../../components/MainPage.jsx');

router.get('/', (req, res) => {
  try {
    const { user } = res.locals;
    res.send(res.renderComponent(MainPage, { title: 'Main page' }));
  } catch ({ message }) {
    res.status(500).json('Ошибка main');
  }
});

router.get('/logout', (req, res) => {
  try {
    res.clearCookie('access').clearCookie('refresh').redirect('/');
  } catch ({ message }) {
    res.status(500).json('Ошибка с логаут');
  }
});

module.exports = router;
