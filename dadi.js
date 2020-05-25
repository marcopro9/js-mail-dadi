// variabili
var playerNumber = parseInt(prompt('scegli un numero da 1 a 6'));
var computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("numero player: " + playerNumber);
console.log("numero computer: " + computerNumber);

// Condizioni
if (playerNumber > 0 && playerNumber < 7) {
  if (playerNumber > computerNumber) {
    console.log('Hai vinto player');
  } else if (playerNumber < computerNumber) {
      console.log('Hai perso player');
    } else {
        console.log ('pareggio');
      }
}
