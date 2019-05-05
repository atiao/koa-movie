const luke = {
    id:2,
    say: function () {
        setTimeout(function () {
            console.log('id', this.id)
        }, 50);
    },
    sayWithThis: function (params) {
        let that = this
        setTimeout(function name(params) {
            console.log('this.id', that.id)
        }, 500);
    },
    sayWithArrow: function (params) {
        setTimeout(() => {
            console.log('arrow id', this.id)
        }, 1500);
    },
    sayWithGlobalArrow: () => {
        setTimeout(() => {
            console.log('global arrow id',this.id)
        }, 2000);
    }
}

luke.say()
luke.sayWithThis()
luke.sayWithArrow()
luke.sayWithGlobalArrow()

// undefined 
// 2
// 2 箭头函数的this指向函数定义时候所属的作用域
// undefined