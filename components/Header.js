class Header{
    constructor(){}
    create(){
        this.element=document.createElement('header')
        this.element.classList.add('header')
        this.element.innerHTML=`
            <div>
                <div class="logo"></div>
                <div class="contactInfo">
                    <p>Phone:</p>
                    <p>+375 (25) 321-45-76</p>
                    <p>Email:</p>
                    <p>place.shop@mail.ru</p>
                </div>
            </div>
        `
        return this.element
    }
    init(){
        return this.create()
    }
}
const header = new Header().init()
export {header}