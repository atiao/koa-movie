const koa = require('Koa')
const app = new koa()
const {normal} = require('./tpl')

app.use(async (ctx, next) => {
    ctx.type = "text/html; chartset=utf-8"
    ctx.body = normal
})

app.listen(45555)