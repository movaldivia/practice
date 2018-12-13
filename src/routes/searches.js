const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('searches', '/', async (ctx) => {
    ctx.body = await ctx.orm.User.findAll();
});

router.post('search-create', '/', async (ctx) => {
    await ctx.orm.Search.create(ctx.request.body);
})

module.exports = router