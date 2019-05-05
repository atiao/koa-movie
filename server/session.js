const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const app = new Koa()

app.use(logger())
app.use(session(app))

app.keys = ['hi lock'];
app.use(ctx => {
    if (ctx.path === '/favicon.ico') return;
    if(ctx.path === '/') {
        let n = ctx.session.views || 0;
        ctx.session.views = ++n;
        ctx.body = n + ' views';
    } else if(ctx.path === '/hi') {
        ctx.body = 'hi';
    } else {
        ctx.body = '404';
    }
});

app.listen(2336)
