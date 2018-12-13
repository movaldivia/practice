const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const users = require('./routes/users');
const employers = require('./routes/employers');
const searches = require('./routes/searches');

const router = new KoaRouter();

router.use(async (ctx, next) => {
    Object.assign(ctx.state, {

    });
    return next();
});

router.use(async (ctx, next) => {
    if (ctx.session.currentEmployerId) {
      ctx.state.currentEmployer = await ctx.orm.employer.findById(ctx.session.currentEmploterId);
    }
    else{
        ctx.state.currentEmployer = false;
    }
    return next();
  });

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/users', users.routes());
router.use('/employers', employers.routes());
router.use('/searches', searches.routes());

module.exports = router;
