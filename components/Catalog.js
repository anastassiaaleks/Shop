import $ from ".././utilits.js"
import {cart} from "./Cart.js"
class Catalog{
    constructor(){
        this.cartStor=0
        this.dataCart = JSON.parse(localStorage.getItem('dataCartLocal')) || []
    }
    create(){
        this.element=document.createElement('div')
        this.element.classList.add('catalog')
        return this.element
    }
    async fakeApi(){
        if(JSON.parse(localStorage.getItem('dataProducts')) && localStorage.dataProducts!=='{}'){
            this.response = JSON.parse(localStorage.getItem('dataProducts'))
        } else {
            this.response = await fetch('https://fakestoreapi.com/products')
            if (this.response.ok) this.response = await this.response.json()
            else console.error("Ошибка HTTP: " + this.response.status)
            localStorage.setItem('dataProducts', JSON.stringify(this.response))
        }
    }
    render(){
        $('.main').innerHTML=''
        let products=document.createElement('div')
        products.classList.add('products')
        this.response.forEach(elem => {
            let that=this
            let product=document.createElement('div')
            product.classList.add(`product_${elem.id}`)
            product.classList.add(`product`)
            product.innerHTML=`
                <img src="${elem.image}" alt="">
                <p>${elem.price}$</p>
                <div class="infoCatalog">
                    <p>${elem.title}</p>
                </div>
                <button class="addCart">Add</button>
            `
            product.querySelector('.addCart').addEventListener('click', function(){
                that.addToCart(elem.id)
            })
            products.appendChild(product)
            $('.main').appendChild(products)
        }) 
    }
    addToCart(id){
        this.dataCart = JSON.parse(localStorage.getItem('dataCartLocal')) || [];
        this.response.map(elem=>{
            if (elem.id==id) {
                let newArr = this.dataCart.filter(element => {
                    return element.id==id;
                })
                // console.log(newArr);

                if(newArr.length==0){
                    elem.count=1
                    this.dataCart.push(elem)
                } else {
                    this.dataCart.forEach(element => {
                        if (element.id==id) element.count+=1
                    })
                }
                localStorage.setItem('dataCartLocal', JSON.stringify(this.dataCart))
            }
        })
        cart.totalCount()
    }
}

let catalog=new Catalog
export {catalog}