const koa = require('Koa')
const app = new koa()

app.use(async (ctx, next) => {
    ctx.body = "movie"
})

app.listen(45555)