export default class imageSlider
{
    constructor(img, urlImage){
        this.urlImage = urlImage;
        this.img = img;
        this.index = 0;
    }
    imageSelector(numberImg)
    {
        this.img.style.backgroundImage = `url(${this.urlImage[numberImg].url})`;
        this.index = numberImg;   
    }

    plusSlides(direction)
    {
        let imgNumber = this.urlImage.length - 1;
        switch (direction) 
        {           
            case `right`:
                if (this.index < imgNumber) {
                    this.index ++;
                    this.imageSelector(this.index);
                } else {
                   this.index = 0;
                   this.imageSelector(this.index); 
                }
                
                break;
            case `left`:
                if (this.index <= 0) 
                {
                    this.index = imgNumber;
                    this.imageSelector(this.index);
                } 
                else 
                {
                   this.index--;
                   this.imageSelector(this.index); 
                }
                
                break;
            default:
                break;
        }
    }
    listCreator(list, title = false){
        list.innerHTML = '';
        for(let listItem of this.urlImage[this.index].list){
            let li = document.createElement(`li`);
            li.appendChild(document.createTextNode(listItem));
            list.appendChild(li);
        }
        if(title != false){
            // title.innerHTML = '';
            title.innerHTML = this.urlImage[this.index].titulo;
        }
    }
}