class Panel{
    constructor(){
        this.choiseWord = ['c','o','c','i','n','a','r'];
        this.lastLetter = '';
        this.VectAnswer = [];
    }

    drawLines(){

        for (let index = 0; index < this.choiseWord.length; index++) {
            console.log('_');
            this.VectAnswer.push('_')
        }
        return this.VectAnswer
    }

    checkWord(letter){
        this.choiseWord.filter((word, index) => {
            if(word == letter){
                console.log(index);
                this.VectAnswer[index] = letter
            }
        })
        return
    }
}

const horcado = document.getElementById('horcado');

window.addEventListener('load', function(){ 
    const horca = new Panel();

    const vect = horca.drawLines();

    vect.map(item =>{
        const div = this.document.createElement('div')
        const h1 = this.document.createElement('h1')
        h1.textContent = item
        div.classList = 'steps'
        console.log(item);
        div.appendChild(h1)
        horcado.appendChild(div);
    })
})