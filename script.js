const words = ['BIOTECNOLOGIA', 'MEDICAMENTOS', 'BIOLOGICOS', 'TERAPIA', 'CELULAR', 'ANTICUERPOS', 'RECOMBINANTE', 'INGENIERIA', 'GENETICA'];
let selectedWord = '';
let guessedWord = '';
let guessedLetters = [];
let hangmanStage = 0;

function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = '_'.repeat(selectedWord.length);
  guessedLetters = [];
  hangmanStage = 0;

  document.getElementById('hangmanImg').src = `hangman-${hangmanStage}.png`;
  document.getElementById('wordToGuess').textContent = guessedWord;
  document.getElementById('guessedLetters').textContent = '';
  document.getElementById('result').textContent = '';
}

function checkLetter() {
  const letterInput = document.getElementById('letterInput').value.toUpperCase();

  if (letterInput && guessedLetters.indexOf(letterInput) === -1) {
    guessedLetters.push(letterInput);

    if (selectedWord.includes(letterInput)) {
      for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letterInput) {
          guessedWord = guessedWord.substring(0, i) + letterInput + guessedWord.substring(i + 1);
        }
      }
      document.getElementById('wordToGuess').textContent = guessedWord;

      if (!guessedWord.includes('_')) {
        document.getElementById('result').textContent = '¡Felicidades! Has adivinado la palabra correctamente.';
      }
    } else {
      hangmanStage++;
      document.getElementById('hangmanImg').src = `hangman-${hangmanStage}.png`;
    }

    document.getElementById('guessedLetters').textContent = `Letras probadas: ${guessedLetters.join(', ')}`;

    if (hangmanStage === 6) {
      document.getElementById('result').textContent = `¡Has perdido! La palabra era: ${selectedWord}. Intenta de nuevo.`;
    }
  }

  document.getElementById('letterInput').value = '';
}

window.addEventListener('load', startGame);