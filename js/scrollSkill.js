const arrowBack = document.querySelector('.icone--arrowBack');
const arrowForward = document.querySelector('.icone--arrowForward');
const scrollDiv = document.querySelector('.skill__blocos');


//console.log(scrollDiv.scrollWidth);

function selecionaPai(element){
    const divPai = element.parentElement;

    return divPai;
}
const paiArrowBack = selecionaPai(arrowBack);
const paiArrowForward = selecionaPai(arrowForward);

function trocaSeta(){
    paiArrowBack.classList.toggle('arrowAtivo');
    paiArrowForward.classList.toggle('arrowAtivo');
}

arrowBack.addEventListener('click',()=>{
    scrollDiv.scrollLeft = 0;
    trocaSeta();
})

arrowForward.addEventListener('click',()=>{
    scrollDiv.scrollLeft = scrollDiv.scrollWidth; 
    trocaSeta();
})