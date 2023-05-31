let prunedWordList = [];
function logic(){
  for (let i = 0; i < letters.length; i++) {
    console.log(translatedColorArray)
    console.log(i);
    console.log(letters)
    let rwp = translatedColorArray[i];
    console.log(rwp);
    switch (rwp){
      case 'r':
          rightLetterElim(letters[i],i);
          console.log('rightElim');
          break;
      case 'w': 
          wrongLetterElim(letters[i]);
          console.log('wrongElim');
          break;
      case 'wp':
          wrongPlaceElim(letters[i],i);
          console.log('WPElim');
          break;
          
    }
  };

  // function to update dom with new pruned word list
  console.log('update dom');
  console.log(prunedWordList);
  translatedColorArray = []; //reset TCA
  
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
  for (let word of currentWordList) {
    if (word[pos] === refLetter.toLowerCase()) {
      prunedWordList.push(word);
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
  for (let word of currentWordList) {
    for (let letter in word){
      if (letter === refLetter ) {
        prunedWordList.push(word);
        break;
      }
    }
  };
};

function wrongPlaceElim(refLetter, pos){
  console.log('it worked')
};