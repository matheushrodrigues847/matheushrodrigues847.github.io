const menuInit = ()=>{
    const menuAbrir = document.querySelector('.icone--menu--abrir');
    const menuFechar = document.querySelector('.icone--menu--fechar');

    function menu(){
        document.documentElement.classList.toggle('ativo');
    }

    menuAbrir.addEventListener('click', menu);
    menuFechar.addEventListener('click', menu);

    document.documentElement.addEventListener('click',(event)=>{
        if(event.target == document.documentElement){
            document.documentElement.classList.remove('ativo');
            console.log(event)
        } 
        
    })
}
menuInit();

const escrever=()=>{
    const titulo = document.querySelector('.home__info h1');
    const novoTitulo = "Matheus";
    const tituloSeparado = novoTitulo.split('');
    
    tituloSeparado.forEach((letra,index)=>{
        setTimeout(()=>{
            titulo.textContent+=letra;
        },100*index)
    })
    
    
    const p = document.querySelector('.home__info p');
    const texto = "Desenvolvedor Front-end";

    setTimeout(()=>{
        p.textContent = texto;
        p.classList.add('bloco__ativo');
    },700)
    
}
escrever();