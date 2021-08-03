import $ from ".././utilits.js"
import {header} from "./Header.js"
import {nav} from "./Nav.js"
import {main} from "./Main.js"
import {footer} from "./Footer.js"
import {catalog} from "./Catalog.js"
import {cart} from "./Cart.js"
class App{
    constructor(){}
    create(){
        this.element=document.createElement('div')
        this.element.classList.add('app')
        return this.element
    }
    render(){
        this.element.appendChild(header)
        this.element.appendChild(nav)
        this.element.appendChild(main)
        this.element.appendChild(footer)
        document.body.appendChild(this.element)
    }
    async init(){
        await catalog.fakeApi().then(()=>{
                $('head').innerHTML=`
                <meta charset="UTF-8">
                <meta name="author" content="Anastasia Aleksandrova">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>hw-14</title>
                <link rel="stylesheet" href="./style/style.css">
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">
            `
            this.create()
            this.render()
        }) 
    }  
}
window.addEventListener('load', ()=>{
    catalog.fakeApi().then(()=>{
        window.location.hash=''
        cart.totalCount()
        catalog.render()
        window.addEventListener('hashchange', ()=>{
            let hash=window.location.hash
            if (hash=='#cart') {
                cart.render()
            } else if (hash=='#catalog'){
                catalog.render()
            }
        }) 
    })
})
export default new App().init()
