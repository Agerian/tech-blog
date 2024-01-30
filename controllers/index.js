const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');
const authRoutes = require('./auth-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);
router.use('/auth', authRoutes);

module.exports = router;
