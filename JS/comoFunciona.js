import imageSlider from './imageSlider.js';
let imgList = [
    {
        url: 'img/foto-app.jpg'
    },
    {
        url: 'img/foto-app-2.jpg'
    },
    {
        url: 'img/foto-app-3.jpg'
    }
];
let slide = new imageSlider(document.querySelector(`#bannerPrint`),imgList);
slide.imageSelector(0);
document.querySelector(`#arrowLeft`).onclick = function(){
    slide.plusSlides(`left`);
}
document.querySelector(`#arrowRight`).onclick = function(){
    slide.plusSlides(`right`);
}