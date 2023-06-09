let newWordList = [];
function logic(){
  for (let i = 0; i < 5; i++) {
    console.log(translatedColorArray)
    console.log(i);
    console.log(letters)
    let rwp = translatedColorArray[i];
    console.log(rwp);
    switch (rwp){
      case 'r':
          rightLetterElim(letters[i],i);
          console.log('rightElim');
          console.log(newWordList);
          if (newWordList.length === 0) {
            alert('Error: No matches exist. Check inputs.');
            return; // Exit the function if newWordList is empty
          };
          break;
      case 'w': 
          wrongLetterElim(letters[i]);
          console.log('wrongElim');
          console.log(newWordList);
          if (newWordList.length === 0) {
            alert('Error: No matches exist. Check inputs.');
            return; // Exit the function if newWordList is empty
          }
          break;
      case 'wp':
          wrongPlaceElim(letters[i],i);
          console.log('WPElim');
          console.log(newWordList);
          if (newWordList.length === 0) {
            alert('Error: No matches exist. Check inputs.');
            return; // Exit the function if newWordList is empty
          }
          break;
          
    };
  };

  // function to update dom with new pruned word list
  console.log('update dom');
  displayNewWordList(newWordList);
  console.log(newWordList);
  translatedColorArray = []; //reset TCA
  
};

// first?
function rightLetterElim(refLetter, pos) {
  let tempWordList = [];

  if (newWordList.length !== 0) {
    for (let word of newWordList) {
      if (word[pos] === refLetter.toLowerCase()) {
        tempWordList.push(word);
      };
    };
    newWordList = tempWordList; // Update newWordList with the new filtered list
    console.log('right letter. 1');
  } else {
    for (let word of allWords) {
      if (word[pos] === refLetter.toLowerCase()) {
        tempWordList.push(word);
      };
    };
    newWordList = tempWordList; // Update newWordList with the new filtered list
    console.log('right letter. 2');
  };
  if (newWordList.length === 0){
    console.log('no words meet criteria')
  };
};
//second?
function wrongLetterElim(refLetter) {
  let tempWordList = [];

  if (newWordList.length !== 0) {
    for (let word of newWordList) {
      let containsRefLetter = false;

      for (let letter of word) {
        if (letter === refLetter.toLowerCase()) {
          containsRefLetter = true;
          break;
        };
      };

      if (!containsRefLetter) {
        tempWordList.push(word);
      };
    };
    newWordList = tempWordList; // Update newWordList with the new filtered list
    console.log('wrong letter. 1');
  } else {
    for (let word of allWords) {
      let containsRefLetter = false;

      for (let letter of word) {
        if (letter === refLetter.toLowerCase()) {
          containsRefLetter = true;
          break;
        };
      };

      if (!containsRefLetter) {
        tempWordList.push(word);
      };
    };
    newWordList = tempWordList; // Update newWordList with the new filtered list
    console.log('wrong letter. 2');
  };
  if (newWordList.length === 0){
    console.log('no words meet criteria')
  };
};

function wrongPlaceElim(refLetter, pos) {
  let tempWordList = [];

  if (newWordList.length !== 0) {
    for (let word of newWordList) {
      let containsRefLetter = false;

      if (word[pos] !== refLetter.toLowerCase()) {
        for (let letter of word) {
          if (letter === refLetter.toLowerCase()) {
            containsRefLetter = true;
            break;
          };
        };
        if (containsRefLetter) {
          tempWordList.push(word);
        }; 
      };
    };
    newWordList = tempWordList; // Update newWordList with the new filtered list
    console.log('WP. 1');
  }
   else {
    for (let word of allWords) {
      let containsRefLetter = false;

      if (word[pos] !== refLetter.toLowerCase()) {
        for (let letter of word) {
          if (letter === refLetter.toLowerCase()) {
            containsRefLetter = true;
            break;
          };
        };
        if (containsRefLetter) {
          tempWordList.push(word);
        };
      };
    };
    newWordList = tempWordList; // Update newWordList with the new filtered list
    console.log('WP. 2');
  };
};
