import $ from ".././utilits.js"
class Cart{
    constructor(){
        this.cartCount=0
        this.priceAll=0
        this.dataCart = JSON.parse(localStorage.getItem('dataCartLocal')) || []
    }
    create(){
        this.element=document.createElement('div')
        this.element.classList.add('cart')
        return this.element
    }

    remove(id){
        this.dataCart.forEach((elem, index)=>{
            if (id===elem.id) {
                this.dataCart.splice(index, 1)
                localStorage.setItem('dataCartLocal', JSON.stringify(this.dataCart))
                this.totalCount() 
                this.render()
            }
        }) 
    }

    minusCount(id){
        this.dataCart.forEach(elem=>{
            if (elem.id===id){
                elem.count>1 ? elem.count -=1 : elem.count
                localStorage.setItem('dataCartLocal', JSON.stringify(this.dataCart))
                this.totalCount()
                this.render()
            }
        })
    }

    plusCount(id){
        this.dataCart.forEach(elem=>{
            if (elem.id===id){
                elem.count<10 ? elem.count +=1 : elem.count
                localStorage.setItem('dataCartLocal', JSON.stringify(this.dataCart))
                this.totalCount()
                this.render()
            }
        })
    }
    
    render(){
        this.create()
        this.dataCart = JSON.parse(localStorage.getItem('dataCartLocal')) || []
        $('.main').innerHTML=`
        <h1>В корзине ${this.dataCart.length} товара</h1>
        <div class='headerCartList'>
            <p>Фото</p>
            <p>Товар</p>
            <p>Цена</p>
            <p>Количество</p>
            <p>Итого</p>
        </div>
        `
        this.dataCart.forEach((elem)=> {
            let that=this
            let product=document.createElement('div')
            product.classList.add(`productCart_${elem.id}`)
            product.classList.add(`productCart`)
            product.innerHTML=`
                <img src="${elem.image}" alt="">
                <div class='infoCart'>
                    <h1 class="productNameCart">${elem.title}</h1>
                </div>
                <p>${elem.price}</p>
                <div class="quantityProduct">
                    <button class="minusCount">-</button>
                    <div class="countCurrent">${elem.count}</div>
                    <button class="plusCount">+</button>
                </div>
                <p>${elem.count*elem.price}</p>
                <button class="delCart">x</button>
            `
            product.querySelector('.delCart').addEventListener('click', function(){
                that.remove(elem.id)
            })
            product.querySelector('.minusCount').addEventListener('click', function(){
                that.minusCount(elem.id)
            })
            product.querySelector('.plusCount').addEventListener('click', function(){
                that.plusCount(elem.id)
            })
            
            this.element.appendChild(product)
        })
        $('.main').appendChild(this.element)
        if(this.dataCart.length<1) {
            $('.main').innerHTML=`
                <div class="emptyCart">
                    <div class="imgEmptyCart"></div>
                    <div class="textEmptyCart">
                        <h1>Ваша корзина пуста</h1>
                        <p>Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку "Добавить в корзину"</p>
                        <button class="btnEmptyCart"><a href="#catalog">Каталог</a></button>
                    </div>
                </div>
            `
        } else{
            $('.main').insertAdjacentHTML('beforeend', `<p>Итого: ${this.priceAll} $</p>`)
        }
    }

    totalCount(){
        let price=0
        if(JSON.parse(localStorage.getItem('dataCartLocal'))) {
            $('.count').innerHTML=JSON.parse(localStorage.getItem('dataCartLocal')).length 
            price=JSON.parse(localStorage.getItem('dataCartLocal')) || 0
            this.priceAll=0
            price.forEach(elem=>{ 
                this.priceAll+=elem.price*elem.count
            })
        }else {
            $('.count').innerHTML=0
        }
    }
}
let cart=new Cart
export {cart}