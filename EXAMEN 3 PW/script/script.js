//Genera un número aleatorio entre 1 y 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
//Selecciona elementos del DOM
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

//Comprueba el intento del usuario
function checkGuess() 
{
  let userGuess = Number(guessField.value);
  if (guessCount === 1) 
  {
    guesses.textContent = "Intentos anteriores: ";
  }
  guesses.textContent += userGuess + " ";
  
   //Comprueba si el usuario ha adivinado el número
  if (userGuess === randomNumber) 
  {
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    //Deshabilita los campos de entrada y muestra el botón de reiniciar
    setGameOver();
  } 
  else if (guessCount === 10) 
  {
    lastResult.textContent = "¡¡¡Fin del juego!!!";
    setGameOver();
  } 
  else 
  {
    lastResult.textContent = "¡Incorrecto!";
    lastResult.style.backgroundColor = "red";
    //Dice que tan alto o bajo es el numero que se quiere adivinar
    if (userGuess < randomNumber) 
    {
      lowOrHi.textContent = "¡El número es muy bajo!";
    } 
    else if (userGuess > randomNumber) 
    {
      lowOrHi.textContent = "¡El número es muy grande!";
    }
  }

  //Incrementa el contador de intentos y limpia el campo
  guessCount++;
  guessField.value = "";
  guessField.focus();
}

//Agrega un event listener al botón "Enviar" para ejecutar la función checkGuess()
guessSubmit.addEventListener("click", checkGuess);

//Dessabilita los campos y reinicia el boton
function setGameOver() 
{
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  // Crea un botón de reiniciar y lo agrega al DOM //
  resetButton.addEventListener("click", resetGame);
}

//Reinicia juego
function resetGame() 
{
  //Restablece variables y DOM
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) 
  {
    resetParas[i].textContent = "";
  }

  //Elimina el boton
  resetButton.parentNode.removeChild(resetButton);

  //Reactiva los campos y activa el de entrada
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  //Genera un nuevo número aleatorio 
  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

//Enfoca el campo automaticamente
guessField.focus();