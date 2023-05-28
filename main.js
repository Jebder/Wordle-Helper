let wordObj = {
    firstWord: null,
    secondWord: null, 
    thirdWord: null, 
    fourthWord: null, 
    fifthWord: null, 
    lastWord: null
};

let letters = []; 


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

    console.log(row)
    console.log(column)

    console.log(`#set${column}Box${row}`)
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
            console.log('Word must be 5 letters.');
        } else {
            for (let word in wordObj) {
                if (wordObj[word] === null){
                    wordObj[word] = combineLetters(letters);
                    letters = []; // reset letters variable
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