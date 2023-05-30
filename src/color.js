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