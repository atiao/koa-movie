var Koa = require('koa')
var app = new Koa()
var convert = require('koa-convert')
var logger = require('koa-logger')

var tab = function (n) {
    return new Array(n).join('&nbsp;')
}

var mid1 = function(next) {
    return function *() {
        this.body = '<h3>req => 第一层中间件</h3>'
        yield next
        this.body += '<h3>res <= 对一层中间件</h3>'
    }
}
var mid2 = function(next) {
    return function *() {
        this.body += '<h3>'+ tab(4) +'req => 第二层中间件</h3>'
        yield next
        this.body += '<h3>' + tab(4) +'res <= 对二层中间件</h3>'
    }
}
var mid3 = function(next) {
    return function *() {
        this.body += '<h3>'+ tab(8) +'req => 第三层中间件</h3>'
        yield next
        this.body += '<h3>' + tab(8) +'res <= 对三层中间件</h3>'
    }
}

app.use(convert(logger()))
app.use(mid1)
app.use(mid2)
app.use(mid3)

app.use(function *() {
    this.body += '<p>'+tab(12)+'koa 核心</p>'
})

app.listen(2333)