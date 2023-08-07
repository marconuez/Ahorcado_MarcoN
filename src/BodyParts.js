class BodyParts{
    constructor(){
        this.VectImages = ['../assets/images/1.png','../assets/images/2.png','../assets/images/3.png','../assets/images/4.png','../assets/images/5.png','../assets/images/6.png','../assets/images/7.png',]
        this.next = 0;
    }

    nextImage(num){
        return this.VectImages[num];
    }
}



const photos = document.getElementById('photos');

const newBodyParts = new BodyParts();

const button = document.createElement('button');
button.textContent ='Siguiente';
const img = document.createElement('img');
img.classList = 'imgClass'

photos.appendChild(button);
let conta = 0;
img.src = newBodyParts.nextImage(conta);
photos.appendChild(img)

button.addEventListener('click', function(){
    img.src = newBodyParts.nextImage(conta);
    photos.appendChild(img)
    conta++;
})
