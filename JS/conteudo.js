import imageSlider from './imageSlider.js' 
let slide = fetch('./JS/conteudo.json').then(result => result.json()).then(data => new imageSlider(document.querySelector('#bannerTitle'),data.urlImage))
let titulo = document.querySelector('#materia');
let list = document.querySelector('#listMateria');
slide.then(slide => {slide.listCreator(list,titulo);slide.imageSelector(0);})
document.querySelector(`#arrowLeft`).onclick = function () {
    slide.then(slide => {slide.plusSlides(`left`); slide.listCreator(list,titulo)})
}
document.querySelector(`#arrowRight`).onclick = function () {
    slide.then(slide => {slide.plusSlides(`right`); slide.listCreator(list,titulo)})
}


