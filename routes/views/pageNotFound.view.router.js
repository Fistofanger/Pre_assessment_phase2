const router = require('express').Router();

const NotFound = require('../../components/NotFound.jsx');

router.get('*', (req, res) => res.status(404).send(res.renderComponent(NotFound, { title: 'Page not found' })));

module.exports = router;
