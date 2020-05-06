

class Aside {
    menu
    constructor(Menu) {
       this.menu=Menu
       this._init()
    }

    _init() {
        const init = {
            name: "首页",
            path: "index",
            children:[],
            order: 0
        }
        this.menu.push(init)
        //排序
        this.menu.sort((a,b)=>{
            //从小到大a-b
            //从大到小b-a
           return a.order-b.order
           
        })

    }
}
export {
    Aside
}
