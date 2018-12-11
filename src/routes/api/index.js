const KoaRouter = require('koa-router');
const usersRouter = require('./users');

const router = new KoaRouter({prefix: '/api'});
router.use('/users', usersRouter.routes());

module.exports = router;