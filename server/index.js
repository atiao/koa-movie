const koa = require('Koa')
const app = new koa()
const { normal, ejsTpl, pugTpl} = require('./tpl')
// const ejs = require('ejs')
const pug = require('pug')
app.use(async (ctx, next) => {
    ctx.type = "text/html; chartset=utf-8"
    ctx.body = pug.render(pugTpl, {
        name:'5555',
        age: '6666'
    })
})

app.listen(45555)