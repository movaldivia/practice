const KoaRouter = require('koa-router');
const router = new KoaRouter();

router.get('employers', '/', async(ctx)=>{
    const employers = await ctx.orm.Employer.findAll();
    ctx.body = employers;
})

router.post('create-employer', '/create', async(ctx)=>{
    ctx.body = await ctx.orm.Employer.create(JSON.parse(ctx.request.body));
})

module.exports = router