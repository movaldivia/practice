const KoaRouter = require('koa-router');
const router = new KoaRouter;

router.put('session-create', '/', async (ctx) => {
    const {username, password} = ctx.request.body;
    const employer = await ctx.orm.user.findOne({ where: { username, password }});
    if (employer) {
        ctx.session.currentEmployerId = employer.id;
    }
});

router.get('check-session', '/check', async (ctx) => {
    let value = false;
    if (ctx.state.currentEmployer) {
        value = true
    }
    ctx.body = JSON.stringify({value})
})

module.exports = router