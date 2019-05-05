const Koa = require('koa')
const http = require('http')
const logger = require('koa-logger')
const app = new Koa()

const mid1 = async (ctx, next) => {
    ctx.body = 'hi5'
    await next() //将程序抛给下一个中间件
    ctx.body = ctx.body + 'this'
}
const mid2 = async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    await next()
}
const mid3 = async (ctx, next) => {
    ctx.body = ctx.body + 'luke'
}

function tail(i) {
    if(i > 3) return
    console.log('before',i)
    tail(i+1)
    console.log('after',i)
}

tail(0)
app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)
app.listen(2335)



// /**
//  * Get port from environment and store in koa.
//  */

// const port = normalizePort('2335');

// /**
//  * Create HTTP server.
//  */

// const server = http.createServer(app.callback());

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);



// /**
//  * Normalize a port into a number, string, or false.
//  */

// function normalizePort(val) {
//     const port = parseInt(val, 10);

//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }

//     if (port >= 0) {
//         // port number
//         return port;
//     }

//     return false;
// }

// /**
//  * Event listener for HTTP server "error" event.
//  */

// function onError(error) {
//     if (error.syscall !== 'listen') {
//         throw error;
//     }

//     const bind = typeof port === 'string'
//         ? 'Pipe ' + port
//         : 'Port ' + port;

//     // handle specific listen errors with friendly messages
//     switch (error.code) {
//         case 'EACCES':
//             console.error(bind + ' requires elevated privileges');
//             process.exit(1);
//             break;
//         case 'EADDRINUSE':
//             console.error(bind + ' is already in use');
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// }


// /**
//  * Event listener for HTTP server "listening" event.
//  */

// function onListening() {
//     const addr = server.address();
//     const bind = typeof addr === 'string'
//         ? 'pipe ' + addr
//         : 'port ' + addr.port;
//     console.log('Listening on ' + bind + '\n');
//     console.log(`请访问：http://localhost:${addr.port}`);
// }
