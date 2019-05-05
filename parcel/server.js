const koa = require('Koa')
const app = new koa()

const { resolve } = require('path')
const serve = require('koa-static')

app.use(serve(resolve(__dirname, './')))

app.listen(46666)