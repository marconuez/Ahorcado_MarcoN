class Keyboard{
    constructor(){
        this.keys = ['A','B','C','D','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        this.keys2=[
            {
                id: 1,
                letter: 'A',
                state: false
            },
            {
                id: 2,
                letter: 'B',
                state: false
            },
            {
                id: 3,
                letter: 'C',
                state: false
            },
            {
                id: 4,
                letter: 'D',
                state: false
            },
            {
                id: 5,
                letter: 'F',
                state: false
            },
            {
                id: 6,
                letter: 'G',
                state: false
            },
            {
                id: 7,
                letter: 'H',
                state: false
            },
            {
                id: 8,
                letter: 'I',
                state: false
            },
            {
                id: 9,
                letter: 'J',
                state: false
            },
            {
                id: 10,
                letter: 'K',
                state: false
            },
            {
                id: 11,
                letter: 'L',
                state: false
            },
            {
                id: 12,
                letter: 'M',
                state: false
            },
            {
                id: 13,
                letter: 'N',
                state: false
            },
            {
                id: 14,
                letter: 'Ñ',
                state: false
            },
            {
                id: 15,
                letter: 'O',
                state: false
            },
            {
                id: 16,
                letter: 'P',
                state: false
            },
            {
                id: 17,
                letter: 'Q',
                state: false
            },
            {
                id: 18,
                letter: 'R',
                state: false
            },
            {
                id: 19,
                letter: 'S',
                state: false
            },
            {
                id: 20,
                letter: 'T',
                state: false
            },
            {
                id: 21,
                letter: 'U',
                state: false
            },
            {
                id: 22,
                letter: 'V',
                state: false
            },
            {
                id: 23,
                letter: 'W',
                state: false
            },
            {
                id: 24,
                letter: 'X',
                state: false
            },
            {
                id: 25,
                letter: 'Y',
                state: false
            },
            {
                id: 26,
                letter: 'Z',
                state: false
            },
        ]
    }

    createKeyboard(){
        return this.keys2
    }

    showCorrect(letter){
        this.keys2.map(object => {
            if(object.letter == letter){
                object.state = true
            }
        });
    }

}


const contentkeys = document.getElementById('keyboard');

window.addEventListener('load', function(){ 
    const keyboard = new Keyboard();
    const vectKeys = keyboard.createKeyboard();
    
    
    vectKeys.map(keys =>{
        // console.log(keys);
        const div = this.document.createElement('div')
        div.classList = 'Div_Letra';
        const h3 = this.document.createElement('h3')
        h3.textContent = keys.letter;
        div.appendChild(h3)
        contentkeys.appendChild(div)

    })

    

});


// const App = new Keyboard();
// // console.log(App.createKeyboard());
// console.log(App.showCorrect('A'));
// console.log(App.showCorrect('Z'));
// console.log(App.showCorrect('X'));
// console.log(App.showCorrect('G'));
// console.log(App.showCorrect('U'));
// console.log(App);

