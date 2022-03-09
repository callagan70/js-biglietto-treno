function interrogatorio(){

let name = prompt ("Come ti chiami?", "The Saint");
let anni = prompt ("In che anno sei nato?", 1970);
let km = prompt ( "Quanti km vuoi fare?");

if (name != null) {
  document.getElementById("name").innerHTML =  "Ciao " + name + "!" + " Come te la passi oggi?";}
  
  anni = (2022 - anni)
  
  document.getElementById("eta").innerHTML = ("La tua età è di " + anni + " anni")
  
  let costo = (km * 0.21)
  
  document.getElementById("km").innerHTML = ("Il costo è di " + costo + "€" + " (0,21€ * " + km + "km)")

if (anni < 18) {
  document.getElementById("km1").innerHTML = "Ti invio....Il prezzo a te dedicato è di: " + ((costo / 100) *80) + "scontato del 20%";
}

else if (anni > 64){
document.getElementById("km1").innerHTML = "Sconto dedicato a uno come te che ha lavorato e pagato le tasse tutta la vita è del 40%, indi paghi solo " + ((costo / 100) *60);
}

else {
  document.getElementById("km1").innerHTML = "Tu che non sei in pensione e non sei in pensione paghi il prezzo pieno: " + costo;
}

console.log (costo)
console.log (anni)
}

// NOTE come inserire le variabili in un secondo "function" 

function interrogatorio2(){
  
  let tessera = prompt ("Sei uno studente o lavori in Boolean? (s/n)");
  
  if (tessera == "s") {
    document.getElementById("tessera").innerHTML =  "Sei sei uno studente o lavori in Boolean" + name + "!" + " hai diritto ad un ulteriore sconto del 50%";}
  
  else if (tessera == "n")
  {document.getElementById("tessera").innerHTML = "Mi dispiace per te " + name + "!" + " non hai diritto ad un ulteriore sconto del 50%";}

// NOTE come inserirele apici nel testo ' ' ? ho provato con UNICODE ma non funziona

  else {
    alert("Hai sbagiato! riprova! Inserisci solo (s) o (n)"), interrogatorio2();}
}
