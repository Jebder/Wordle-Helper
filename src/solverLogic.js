// a function to determine if the letters are right, wrong, or in wrong place.
const translatedColorArray = []; // w's = wrong, r's = right, wp's = wrong place. 
const w = [];
const r = [];
const wp = [];

function translateColor(colors){
    for (let color in colors) {
        switch (color) {
            case 'rgb(255, 255, 255)': // white color in RGB format
              translatedColorArray.push('w');
              break;
            case 'rgb(255, 255, 0)': // yellow color in RGB format
            translatedColorArray.push('wp');
              break;
            case 'rgb(0, 128, 0)': // green color in RGB format
            translatedColorArray.push('r');
              break;
          }
    }
};


function getLettersForSearch(){
    for (let letter in translatedColorArray) {
        switch (letter) {
            case 'r': 
                // store letter and letter location. Must be in location. 
              break;
            case 'w': 
                // remove words with letter from word list.  
              break;
            case 'wp': 
                // store letter and letter location. Cannot be in location. 
              break;
          }
    };
};

function rightLetterElim(){

};