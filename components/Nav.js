class Nav{
    constructor(){}
    create(){
        this.element=document.createElement('nav')
        this.element.classList.add('nav')
        this.element.innerHTML=`
            <div class="navPanel">
                <div>
                    <a href="#catalog">Каталог</a>
                </div>
                <div class="cartCount">
                    <a href="#cart">Корзина</a>
                    <div class="count"></div>
                </div>
            </div>
        `
        return this.element
    }
    init(){
        return this.create()
    }
}
const nav = new Nav().init()
export {nav}