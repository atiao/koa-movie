const mongoose = require('mongoose')
const db = 'mongodb://localhost/douban-test'

mongoose.Promise = global.Promise

exports.connet = () => {
    if(process.env.NODE_ENV != 'production') {
        mongoose.set('debug', true)
    }

    mongoose.connect(db)

    mongoose.connection.on('disconnected', () =>{
        mongoose.connect(db)
    })
    mongoose.connection.on('error', err =>{
        console.log(err)
    })
    mongoose.connection.on('open', () =>{
        console.log('mongo connected success')
    })
}