let wordObj = {
    firstWord: null,
    secondWord: null, 
    thirdWord: null, 
    fourthWord: null, 
    fifthWord: null, 
    lastWord: null
};

let letters = []; 

let colorArray = [];

function changeColor(input) {
    let computedStyle = window.getComputedStyle(input);
    let color = computedStyle.backgroundColor;
    console.log(color + 'color');
  
    switch (color) {
      case 'rgb(255, 255, 255)': // white color in RGB format
        input.style.backgroundColor = 'yellow';
        console.log('yellow');
        break;
      case 'rgb(255, 255, 0)': // yellow color in RGB format
        input.style.backgroundColor = 'green';
        console.log('green');
        break;
      case 'rgb(0, 128, 0)': // green color in RGB format
        input.style.backgroundColor = 'white';
        console.log('white');
        break;
    }
  }


function setColors(){
    let cells = document.querySelectorAll('.box');
    cells.forEach((cell)=> {
        cell.addEventListener('click', ()=> {
            changeColor(cell);
        })
    })
};


function enterColors(){

};


function removeLetter(letter){
    let currentWordObj = '';
    
    
    //find what number word we should remove the letters of.
    for (let word in wordObj) {
        if (wordObj[word] === null){
            currentWordObj = word;
            break;
        };
    };

    const keys = Object.keys(wordObj);
    const row = letters.length + 1; 
    const column = keys.indexOf(currentWordObj) + 1; // because 0 index 

    let cell = document.querySelector(`#set${column}Box${row}`);
    cell.innerHTML = '';
};


function displayLetter(letter) {
    let currentWordObj = '';
    
    
    //find what number word we should fill the letters of.
    for (let word in wordObj) {
        if (wordObj[word] === null){
            currentWordObj = word;
            break;
        };
    };
    
    // 
    const keys = Object.keys(wordObj);
    const row = letters.length; 
    const column = keys.indexOf(currentWordObj) + 1; // because 0 index 

    let cell = document.querySelector(`#set${column}Box${row}`);
    cell.innerHTML = letter;
};


function combineLetters(letters) {
    let word = "";
    for (let i = 0; i < letters.length; i++) {
      word = word + letters[i];
    }
    return word;
  };

function populateWord(input) {
    if (input === 'BACKSPACE'){
        letters.pop();
        removeLetter(input);
    } else if (input === 'ENTER'){
        if (letters.length < 5){
            console.log('Word must be 5 letters.'); // change to something more user friendly like an alert 
        } else {
            for (let word in wordObj) {
                if (wordObj[word] === null){
                    wordObj[word] = combineLetters(letters);
                    letters = []; // reset letters variable
                    // prompt the user to set right, right but wrong place, and wrong locations in the submitted word.
                    // do the logic function. It will do the logic to figure out what words to recommend. 
                    break;
                };
            };
        };
    } else { 
        if (letters.length < 5) {
            letters.push(input);
            displayLetter(input);
        };
    };
};

function initializeKeyboard(){
    let keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.addEventListener('click', ()=>{
            let keyValue = key.innerHTML;
            populateWord(keyValue);
            console.log(wordObj);
        })
    });
};

initializeKeyboard();
setColors();