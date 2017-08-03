const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  ctx.body = {
    message: "Hello world"
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, err => {
  if (err) {
    return console.error('Failed', err)
  }
  console.log(`Listening on port ${PORT}`)
})
