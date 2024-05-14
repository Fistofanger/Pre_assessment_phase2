const router = require('express').Router();
const RegistrationPage = require('../../components/RegistrationPage.jsx');
const AuthorizationPage = require('../../components/AuthorizationPage.jsx');

router.get('/registration', (req, res) => {
  try {
    res.send(
      res.renderComponent(RegistrationPage, { title: 'Registartion Page' })
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/authorization', (req, res) => {
  try {
    res.send(
      res.renderComponent(AuthorizationPage, { title: 'Authorization Page' })
    );
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
