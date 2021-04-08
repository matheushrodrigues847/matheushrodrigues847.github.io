function menuOptions(){
    const menu = document.querySelectorAll('.menu__active');
    menu[0].nextElementSibling.classList.add('ativo');
    menu[0].classList.add('ativo');

    function initTab(event) {
        event.preventDefault();

        event.currentTarget.classList.toggle('ativo')
        event.currentTarget.nextElementSibling.classList.toggle('ativo')

    }
    menu.forEach(item => {
        item.addEventListener('click', initTab)
    });
}
menuOptions();

const option = ()=>{
    const botaoMenuAbrir = document.querySelector('.icone--abrirMenu');

    botaoMenuAbrir.addEventListener('click', () => {
        document.documentElement.classList.add('menu__ativo');
        menuAfter()
    })

    const botaoMenuFechar = document.querySelector('.icone--fecharMenu');

    botaoMenuFechar.addEventListener('click', () => {
        document.documentElement.classList.remove('menu__ativo');
    })
}
option();

const menuAfter = ()=>{
    const menuAfter = document.querySelector('.menu__ativo');
    menuAfter.addEventListener('click',(event)=>{
        if(event.target == document.documentElement) menuAfter.classList.remove('menu__ativo')
    })
}
