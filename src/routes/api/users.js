const _ = require('lodash');
const KoaRouter = require('koa-router');

const router = new KoaRouter();

function apiUrl(ctx, ...params){
    return `${ctx.origin}${ctx.router.url(...params)}`;
}

router.get('users', '/', async(ctx) => {
    const users = await ctx.orm.user.findAll();
    const usersJSON = users.map(user => ({
        ..._.pick(user, 'id', 'name')
    }));
    ctx.body = usersJSON;
});

router.post('users-create', '/', async (ctx) => {
    await ctx.orm.user.create(ctx.request.body);
    ctx.redirect(ctx.router.url('users'));
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: `maurize97@gmail.com`,
        from: `accudev2018@gmail.com`,
        subject: `Tienes una intersección!`,
        text: `El usuario x cumple con tus condiciones`,
        html: `
        <h1>Hola</h1>
        <p>parece que hoy es nuestro día de suerte</p>
        `
    };
    sgMail.send(msg);
  });



module.exports = router;

