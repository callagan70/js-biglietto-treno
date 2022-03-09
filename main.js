function interrogatorio(){

let name = prompt ("Come ti chiami?", "The Saint");
let tessera = prompt ("Sei uno studente o lavori in Boolean? (s/n)");
let km = prompt ( "Quanti km vuoi fare?");
let anni = prompt ("In che anno sei nato?")

if (name != null) {
  document.getElementById("name").innerHTML =  "Hello " + name + "! How are you today?";}


}