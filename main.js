let wordDict = {
    firstWord: null,
    secondWord: null, 
    thirdWord: null, 
    fourthWord: null, 
    fifthWord: null, 
    lastWord: null
};

let letters = [null, null, null, null, null]; 


function combineLetters(letters) {
    let word = "";
    for (let i = 0; i < letters.length; i++) {
      word = word + letters[i];
    }
    return word;
  };

function populateWord(input) {
    if (input === 'BACKSPACE'){
        // DO BACKSPACE STUFF
    } else if (input === 'ENTER'){
        for (let word in wordDict) {
            if (wordDict[word] === null){
                wordDict[word] = combineLetters(letters);
                letters = [null, null, null, null, null]; // reset letters variable
                break;
            };
        };
    } else{
        for (let i = 0;i < 5; i++){
            if (letters[i] === null) {
                letters[i] = input;
                console.log(letters);
                break;
            };
        };
    };
};

function initializeKeyboard(){
    let keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.addEventListener('click', ()=>{
            let keyValue = key.innerHTML;
            populateWord(keyValue);
            console.log(wordDict);
        })
    });
};

initializeKeyboard();