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

const botaoMenuAbrir = document.querySelector('.icone--abrirMenu');

botaoMenuAbrir.addEventListener('click', ()=>{
    document.documentElement.classList.add('menu__ativo');
})

const botaoMenuFechar = document.querySelector('.icone--fecharMenu');

botaoMenuFechar.addEventListener('click',()=>{
    document.documentElement.classList.remove('menu__ativo');
})
