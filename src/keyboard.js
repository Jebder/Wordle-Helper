function keyboard(){
    document.addEventListener('keydown', (event) => {
        let keyValue = event.key.toUpperCase();
        console.log(event);
        if (/[A-Z]/.test(keyValue) && (keyValue.length === 1 || keyValue === 'ENTER' || keyValue === 'BACKSPACE')) {
            populateWord(keyValue);
            event.preventDefault();
        };
    });
};

function virtualKeyboard(){
    let keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.addEventListener('click', ()=>{
            let keyValue = key.textContent;
            populateWord(keyValue);
        })
    });
};

function keyboards() {
    keyboard();
    virtualKeyboard();
};

function twinkle() {
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        twinkleColor(key);
    })
};

function twinkleColor(key) {
    function loop() {
        const color = getRandomColor();
        key.style.backgroundColor = color;
        key.style.transition = 'background-color 2s';
        setTimeout(loop, 2000);
    }

    loop(); // Start the loop initially
}

function getRandomColor(){
    var r = Math.floor(Math.random() * 256); // Random value for red (0-255)
    var g = Math.floor(Math.random() * 256); // Random value for green (0-255)
    var b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    var rgbValue = 'rgb(' + r + ', ' + g + ', ' + b + ')'; // Construct the RGB value
    return rgbValue;
};

function twinkleButton() {
    const twinkleButton = document.querySelector('.twinkleButton');
    twinkleColor(twinkleButton);
    twinkleButton.addEventListener('click', twinkle);
}