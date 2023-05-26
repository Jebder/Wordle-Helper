let wordArray = [];

fetch('https://jebder.github.io/Wordle-Solver/sgb-words.txt')
  .then(response => response.text())
  .then(data => {
    // Split the text by newlines to get individual words
    wordArray = data.split('\n');
    
    // Do something with the wordArray here
    console.log(wordArray);
  })
  .catch(error => {
    console.log('Error fetching the word list:', error);
  });

  