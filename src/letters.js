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
    cell.textContent = '';
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
    cell.textContent = letter;
};



function combineLetters(letters) {
    return letters.join('');
};

function populateWord(input) {
    if (input === 'BACKSPACE'){
        letters.pop();
        removeLetter(input);
    } else if (input === 'ENTER'){
        if (letters.length < 5){
            alert('Word must be 5 letters.'); // change to something more user friendly like an alert 
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