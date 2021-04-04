const menu = document.querySelectorAll('.menu__active');
menu[0].nextElementSibling.classList.add('ativo');
menu[0].classList.add('ativo');

function initTab(event){
    event.preventDefault();

    event.currentTarget.classList.toggle('ativo')
    event.currentTarget.nextElementSibling.classList.toggle('ativo')
    
}
menu.forEach(item => {
    item.addEventListener('click', initTab)
});