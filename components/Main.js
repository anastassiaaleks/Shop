class Main{
    constructor(){}
    create(){
        this.element=document.createElement('main')
        this.element.classList.add('main')
        this.element.innerHTML=``
        return this.element
    }
    init(){
        return this.create()
    }
}
const main = new Main().init()
export {main}
