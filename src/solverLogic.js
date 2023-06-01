let newWordList = [];
function logic(){
  for (let i = 0; i < 2; i++) {
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
  console.log(newWordList);
  translatedColorArray = []; //reset TCA
  
};

// first?
function rightLetterElim(refLetter,pos){
  // set word list to the already pruned list if it exists. Should be faster?
  if (newWordList.length !== 0){
    for (let word of newWordList) {
      if (word[pos] === refLetter.toLowerCase()) {
        newWordList.push(word);
      };
    };
  }else{
    for (let word of allWords) {
      if (word[pos] === refLetter.toLowerCase()) {
        newWordList.push(word);
      };
    };
  };
  // prune list
};
//second?
function wrongLetterElim(refLetter){
  // set word list to the already pruned list if it exists. Should be faster?
  if (newWordList.length !== 0){
    for (let word of newWordList) {
      let containsRefLetter = false;
      
      for (let letter of word) {
        if (letter === refLetter) {
          containsRefLetter = true;
          break;
        }
      }
      
      if (!containsRefLetter) {
        newWordList.push(word);
      }
    }
  } else {
    for (let word of allWords) {
      let containsRefLetter = false;
      
      for (let letter of word) {
        if (letter === refLetter) {
          containsRefLetter = true;
          break;
        };
      };
      
      if (!containsRefLetter) {
        newWordList.push(word);
      };
    };
  };
};

function wrongPlaceElim(refLetter, pos){
  console.log('it worked')
};

