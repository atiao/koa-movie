const doSync = (sth, time) => new Promise (resolve => {
    setTimeout(() => {
        console.log(`${sth}用了${time}ms`)
        resolve()
    }, time);
})

const doASync = (sth, time, cb) => {
    setTimeout(() => {
        console.log(`${sth}用了${time}ms`)
        cb && cb()
    }, time);
}

const doElse = (sth) => {
    console.log(sth)
}

const Scott = {doSync, doASync}
const Meizi = {doSync, doASync, doElse}
;(async () => {
    // console.log('case 1 妹子到门口')
    // await Scott.doSync('scott 刷牙', 1000)
    // console.log('一直等')
    // await Meizi.doSync('妹子洗澡', 2000)
    // Meizi.doElse('妹子忙别的了')


    console.log('case 1 妹子到门口按开关')
    Scott.doASync('scott 刷牙', 1000, () => {
        console.log('WC通知妹子来洗澡')
        Meizi.doASync('妹子洗澡', 2000)
    })
    
    Meizi.doElse('妹子干别的了')
})()