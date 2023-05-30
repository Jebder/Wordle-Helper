let colorArray = [];

function getColors(obj){
  const keys = Object.keys(wordObj);
  const column = keys.indexOf(obj);

  const parentEle = document.querySelector(`#boxSet${column}`);
  const elements = parentEle.querySelectorAll('*');
  console.log(elements)

  for (let element of elements) {
      let computedStyle = window.getComputedStyle(element);
      let color = computedStyle.backgroundColor;
      colorArray.push(color);
  };
  console.log(colorArray)
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