//  Método 1:
let d = new Date();
document.getElementById("date").innerHTML =
  "<h1>Current time: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()  + "</h1>"

// Using Template Strings
  document.getElementById("date").innerHTML =
  `<h1>Current time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} </h1>`


//  Método 2: 

function getHour(){
    const h = new Date();
    const hours = ((h.getHours() < 10) ? "0" : "") + h.getHours();
    const minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
    const secs = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

    console.log("Hora actual: " + hours + ":" + minutes + ":" + secs);

}

getHour();

//  Método 2.1 - Using IIFE:

(function(){
    const h = new Date();
    const hours = ((h.getHours() < 10) ? "0" : "") + h.getHours();
    const minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
    const secs = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

    console.log("Hora actual: " + hours + ":" + minutes + ":" + secs);

})();

//  Método 3:

let timeNow = new Date();
    
// Queremos que la hora se muestre siempre con 2 dígitos. Para eso, hacemos lo siguiente:
// Usamos un ternario para saber si el número de digitos es menor que 2
let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
let seconds = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();

//  Concatenando variables | Usando ES5 
// let mainTime = hours + ":" + minutes + ":" + seconds;
 //  Concatenando variables | Usando ES6: Template Strings (Template literals) 
let mainTime = `${hours}:${minutes}:${seconds}`;

console.log(mainTime);
