// variabili
var richiestaEmail = prompt("qual è la tua email?");
var iscritti = [ "zio@gmail.com", "ciccio@gmail.com", "asdrubale@gmail.com", "abbello@gmail.com", "patacca@gmail.com" ];
var controllo = true;

// Ciclo di controllo + Condizioni
for (var i = 0; i < iscritti.length; i++) {
  var rispostaCorretta = iscritti [i];
  if (richiestaEmail == rispostaCorretta) {
      controllo = true;
      console.log("puoi entrare");
    }
      else if (richiestaEmail !== rispostaCorretta) {
        controllo = false;
        console.log("RICORDATI L'EMAIL O VA VIA");
      };
}
