class Footer{
    constructor(){}
    create(){
        this.element=document.createElement('footer')
        this.element.classList.add('footer')
        this.element.innerHTML=`
            <div class="footerTop">
                <div>
                    <p>Покупателям</p>
                    <a href="">Как это работает </a>
                    <a href="">Защита покупателя</a>
                    <a href="">Условия оплаты </a>
                    <a href="">Условия использования</a>
                    <a href="">Регистрация аккаунта</a>
                </div>
                <div>
                    <p>Поставщикам</p>
                    <a href="">Как стать продавцом</a>
                    <a href="">Правила участия </a>
                    <a href="">Личный кабинет продавца </a>
                </div>
                <div>
                    <p>О компании</p>
                    <a href="">О PlaceMik</a>
                    <a href="">Новости</a>
                    <a href="">Часто задаваемые вопросы</a>
                    <a href="">Служба поддержки </a>
                    <a href="">Сообщить о нарушении авторских прав  </a>
                </div>
                <div>
                    <p>Хотите быть в курсе последних новостей и акций? </p>
                    <form class="footerForm">
                        <input class="footerInput" type="text" placeholder="konstantinov@yandex.ru">
                        <div class="gradientText"><button class="subButton">Подписаться</button></div>
                    </form>
                    <p>Мы в соцсетях</p>
                    <div class="socialBlock">
                        <a href=""><div class="imgVk"></div></a>
                        <a href=""><div class="imgInst"></div></a>
                        <a href=""><div class="imgFace"></div></a>
                    </div>
                </div>   
            </div>
            <div class="footerBottom">
                <div class="logoWhite"></div>
                <p>© PlaceMik.ru, 2021</p>
            </div>
        `
        return this.element
    }
    init(){
        return this.create()
    }
}
const footer = new Footer().init()
export {footer}