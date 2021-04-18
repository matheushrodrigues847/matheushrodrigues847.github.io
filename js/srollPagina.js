function scrollSuave(){
    const linksInternos = document.querySelectorAll('.menu__option a[href^="#"]');


    function scrollSuave(event) {
        event.preventDefault()

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop - 90;

        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        })

        if(document.documentElement.classList == 'ativo')
            document.documentElement.classList.remove('ativo')


    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSuave);
    })
}
scrollSuave();


function ativaBlocos(){
    const sections = document.querySelectorAll('.bloco');
    const windowMetade = window.innerHeight*0.95;

    console.log(windowMetade)
    sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;

        (sectionTop <= windowMetade)? 
            section.classList.add('ativo') : 
            section.classList.remove('ativo')
    })
}
window.addEventListener('scroll',ativaBlocos);