const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')

const tab =  (n) => {
    return new Array(n).join('/br')
}


const mid1 = async(ctx, next) => {
    console.log('mid1')
        ctx.body = `req => 第一层中间件`
        await next()
        ctx.body += `res <= 对一层中间件`
}

const mid2 = async(ctx, next) => {
        console.log(2222)
        ctx.body += `$tab(4) +'req => 第二层中间件`
        await next()
        ctx.body += ` $tab(4) +'res <= 对二层中间件`
    }

const mid3 = async(ctx, next) => {
        ctx.body += `$tab(8) +'req => 第三层中间件`
        await next()
        ctx.body += `$tab(8) +'res <= 对三层中间件`
}

app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)

app.use(async(ctx, next) => {
    ctx.body += `$tab(12)koa 核心`
})

app.listen(2335)