const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('users', '/', async (ctx) => {
    ctx.body = await ctx.orm.user.findAll();
});

router.post('user-create', '/', async (ctx) => {
    await ctx.orm.user.create(ctx.request.body);
})

module.exports = router