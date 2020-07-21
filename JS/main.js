import imageSlider from './imageSlider.js';
let urlImage = [
    {
        titulo: 'imagem 1',
        url: 'img/geo01.jpg'

    },
    {
        titulo: 'imagem 2',
        url: 'img/quimica01.jpg'
    },
    {
        titulo: 'imagem 3',
        url: 'img/hist01.jpg'
    },
];
let slide = new imageSlider(document.querySelector(`#imgSliderBox`),urlImage);
let dot1 = document.querySelector(`#dot1`);
let dot2 = document.querySelector(`#dot2`);
let dot3 = document.querySelector(`#dot3`);
dotOn();
dot1.onclick = function(){
    slide.imageSelector(0);
    dotOn();
}
dot2.onclick = function(){
    slide.imageSelector(1);
    dotOn();
}
dot3.onclick = function(){
    slide.imageSelector(2);
    dotOn();
}
document.querySelector(`#arrowLeft`).onclick = function(){
    slide.plusSlides(`left`);
    dotOn();
}
document.querySelector(`#arrowRight`).onclick = function(){
    slide.plusSlides(`right`);
    dotOn();
}

function dotOn(){
    let selected = slide.index + 1;
    dot1.className = '';
    dot2.className = '';
    dot3.className = '';
    document.querySelector(`#dot${selected}`).className = 'dotOn';
}