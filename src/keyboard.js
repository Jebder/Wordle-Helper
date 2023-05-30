function keyboard(){
    document.addEventListener('keydown', (event) => {
        let keyValue = event.key.toUpperCase();
        if (/[A-Z]/.test(keyValue)) {
            populateWord(keyValue);
            console.log(wordObj);
        }
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

// -------------------------------------------------------------------------------------
//Add these for the click sound when ready.

//Load keyboard click sound
//const clickSound = new Audio('wow.mp3')

//clickSound.play(); //play the click sound

//Play keyboard click sound on keyup event
    //document.addEventListener('keyup', () => {
        //clickSound.pause();
        //clickSound.currentTime = 0;
    //});