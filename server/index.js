const koa = require('Koa')
const app = new koa()
// const { pugTpl} = require('./tpl')
// const ejs = require('ejs')
// const pug = require('pug')
const views = require('koa-views')
const {resolve} = require('path')

app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))

app.use(async (ctx, next) => {
    await ctx.render('index', {
        name: 666,
        age:777
    })
})

app.listen(45555)