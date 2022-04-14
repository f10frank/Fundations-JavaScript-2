const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  
//tu codigo aqui
let myArray = str.split('');
let theSize=myArray.length;
let arrayWords = [];

// In this bucle retire the last position and push in arrayWords
for(let i=theSize; i>0; i--) {
  let aux = myArray.pop();
  arrayWords.push(aux);
  }

//Here pass to String whitout ","
myString = arrayWords.toString().replace(/,/g,'');
myArray=myString.split(' ');

// Restart the variables and enter again in bucle Stack
theSize=myArray.length;
arrayWords = [];
for(let i= 0; i < theSize; i++) {
  let aux = myArray.pop();
  arrayWords.push(aux);
}
return arrayWords.toString().replace(/,/g,' ');
};




module.exports = {
    efectoEspejo,
   
}