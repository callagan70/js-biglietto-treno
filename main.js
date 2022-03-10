function interrogatorio(){

let name = prompt ("Come ti chiami?", "The Saint");
let anni = prompt ("In che anno sei nato?", 1970);
let km = prompt ( "Quanti km vuoi fare?", 123.456);


if (name != null) {
  result =`Ciao <i style='color:red; font-size: 32px; font-weight: 700'>${name} !</i> Come te la passi oggi?`;
  document.getElementById("name").innerHTML = result;}

  anni = (2022 - anni)
  result =`La tua età è di <i style="color:red; font-size: 2em">${anni}</i> anni`;
  document.getElementById("eta").innerHTML = result;
  
  let costo = (km * 0.21).toFixed(2);
  let ventiPercento =  ((costo / 100) * 80).toFixed(2);
  let quarantaPercento =  ((costo / 100) * 60).toFixed(2);

  document.getElementById("km").innerHTML = (`Il costo è di <i style="color:red; font-size: 2em">${costo}€</i> (0,21€ * ${km}km)`)
 
if (anni < 18) {
  document.getElementById("km1").innerHTML = (`Ti invidio....Il prezzo a te dedicato è di: <i style="color:red; font-size: 2em">${ventiPercento}€</i> scontato del 20%`);
}

else if (anni > 64){
document.getElementById("km1").innerHTML = `Sconto dedicato a uno come te che ha lavorato e pagato le tasse tutta la vita è del 40%, indi paghi solo <i style="color:red; font-size: 2em">${quarantaPercento}€</i>`;
}

else {
  document.getElementById("km1").innerHTML = `Tu che non sei in pensione paghi il prezzo pieno: <i style="color:red; font-size: 2em">${costo}€</i>`;}
}

// NOTE come inserire le variabili in un secondo "function" 

function interrogatorio2(){
  
  let tessera = prompt ("Sei uno studente o lavori in Boolean? (s/n)");
  
  if (tessera == "s") {
    document.getElementById("tessera").innerHTML =  "Sei sei uno studente o lavori in Boolean" + name + "!" + " hai diritto ad un ulteriore sconto del 50%";}
  
  else if (tessera == "n")
  {document.getElementById("tessera").innerHTML = "Mi dispiace per te " + name + "!" + " non hai diritto ad un ulteriore sconto del 50%";}

  else {
    alert("Hai sbagiato! riprova! Inserisci solo 's' o 'n' "), interrogatorio2();}
}
