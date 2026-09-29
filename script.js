

function ativaletra(elemento) {
    const arrTexto = elemento.innerHTML.split(''); //Separando cada letra do texto
    elemento.innerHTML = ''; //Limpando o texto do elemento
    arrTexto.forEach((letra, i) => {
        setTimeout(() => { //Função para adicionar cada letra com um atraso
            elemento.innerHTML += letra; //Adicionando cada letra ao elemento
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');
ativaletra(titulo); //Chamando a função para ativar a animação de digitação no elemento


const elemSlides = document.querySelector(".slides");
const elemButtonLeft = document.querySelector(".leftarrow");
const elemButtonRight = document.querySelector(".rightarrow");
const elemsImages = document.querySelectorAll(".slides img");

let img = 0;

elemButtonLeft.addEventListener("click", () => {
    img--;
    if (img < 0) img = elemsImages.length - 1;
    CarouselLoader();
    console.log(img);
});
elemButtonRight.addEventListener("click", () => {
    img++;
    if (img > elemsImages.length - 1) img = 0
    CarouselLoader();
});

const CarouselLoader = () => {
    elemSlides.style.transform = `translateX(-${img * 100}%)`;
};

setInterval(() => {
    img++
    if (img > elemsImages.length - 1) img = 0
    CarouselLoader();
}, 2500);