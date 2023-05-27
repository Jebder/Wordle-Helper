let wordDict = {
    firstWord: null,
    secondWord: null, 
    thirdWord: null, 
    fourthWord: null, 
    fifthWord: null, 
    lastWord: null
};

let letters = []; 


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
        console.log(letters)
    } else if (input === 'ENTER'){
        if (letters.length < 5){
            console.log('Word must be 5 letters.');
        } else {
            for (let word in wordDict) {
                if (wordDict[word] === null){
                    wordDict[word] = combineLetters(letters);
                    letters = []; // reset letters variable
                    break;
                };
            };
        };
    } else { 
        if (letters.length < 5) {
            letters.push(input);
            console.log(letters);
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