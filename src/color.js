let translatedColorArray = []; // w's = wrong, r's = right, wp's = wrong place. 
                               // need to be sure to get it to reset after.

function translateColor(colors){
    for (let color of colors) {
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

function getColors(obj){
  let colorArray = [];
  const keys = Object.keys(wordObj);
  const column = keys.indexOf(obj) + 1;
  console.log(column + 1)
  console.log(keys)

  const parentEle = document.querySelector(`#boxSet${column}`);
  const elements = parentEle.querySelectorAll('*');

  for (let element of elements) {
      let computedStyle = window.getComputedStyle(element);
      let color = computedStyle.backgroundColor;
      colorArray.push(color);
      console.log(colorArray)
  };

  translateColor(colorArray);
};

function stampColors() {
  let currentWordObj;

  for (let word in wordObj) {
      if (wordObj[word] === null){
          currentWordObj = word;
          break;
      };
  };
  getColors(currentWordObj);
  console.log(currentWordObj);
};

function changeColor(input) {
    let computedStyle = window.getComputedStyle(input);
    let color = computedStyle.backgroundColor;
  
    switch (color) {
      case 'rgb(255, 255, 255)': // white color in RGB format
        input.style.backgroundColor = 'yellow';
        break;
      case 'rgb(255, 255, 0)': // yellow color in RGB format
        input.style.backgroundColor = 'green';
        break;
      case 'rgb(0, 128, 0)': // green color in RGB format
        input.style.backgroundColor = 'white';
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