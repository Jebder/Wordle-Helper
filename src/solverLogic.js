let prunedWordList = [];
function logic(){
  for (let letter of letters) {
  let position = letters.indexOf(letter);
    console.log(translatedColorArray)
    console.log(position);
    console.log(letter)
    console.log(letters)
    let rwp = translatedColorArray[position];
    console.log(rwp);
    switch (rwp){
      case 'r':
          rightLetterElim(letter,position);
          console.log('rightElim');
          break;
      case 'w': 
          wrongLetterElim(letter);
          console.log('wrongElim');
          break;
      case 'wp':
          wrongPlaceElim(letter,position);
          console.log('WPElim');
          break;
          
    }
  };

  // function to update dom with new pruned word list
  console.log('update dom');
  console.log(prunedWordList);
  
};

// first?
function rightLetterElim(refLetter,pos){
  let currentWordList = '';
  // set word list to the already pruned list if it exists. Should be faster?
  if (prunedWordList.length === 0){
    currentWordList = allWords;
  } else {
    currentWordList = prunedWordList;
  };
  // prune list
  for (let word in currentWordList) {
    if (word[pos] === refLetter) {
      prunedWordList.push(word);
      console.log(prunedWordList)
      console.log('prunedWord');
    };
  };
};
//second?
function wrongLetterElim(refLetter){
  let currentWordList = '';
  // set word list to the already pruned list if it exists. Should be faster?
  if (prunedWordList.length === 0){
    currentWordList = allWords;
  } else {
    currentWordList = prunedWordList;
  };

  //prune list
  for (let word in currentWordList) {
    for (let letter in word){
      if (letter === refLetter ) {
        prunedWordList.push(word);
        console.log('prunedWord');
        break;
      }
    }
  };
};

function wrongPlaceElim(refLetter, pos){
  console.log('it worked')
};