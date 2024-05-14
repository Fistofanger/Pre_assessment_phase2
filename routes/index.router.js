const router = require('express').Router();

const authViewRouter = require('./views/auth.view.router');
// const teasViewRouter = require('./views/teas.views.router');
const mainViewRouter = require('./views/main.views.router');
// const mapViewRouter = require('./views/map.view.router');
// const locationViewRouter = require('./views/location.view.router');
// const profileViewRouter = require('./views/profile.views.router');
// const pageNotFoundViewRouter = require('./views/pageNotFound.view.router');

// // api
// const authApiRouter = require('./api/auth.api.router');
// const teaApiRouter = require('./api/tea.api.router');
// const commentApiRouter = require('./api/comment.api.router');
// const likeApiRouter = require('./api/like.api.router');

// // маршруты для views
router.use('/', mainViewRouter);
router.use('/auth', authViewRouter);
// router.use('/teas', teasViewRouter);
// router.use('/teaMap', mapViewRouter);
// router.use('/location', locationViewRouter);
// router.use('/profile', profileViewRouter);

// // маршруты для api
// router.use('/api/auth', authApiRouter);
// router.use('/api/teas', teaApiRouter);
// router.use('/api/comments', commentApiRouter);
// router.use('/api/likes', likeApiRouter);

// // 404
// router.use('*', pageNotFoundViewRouter);

module.exports = router;
