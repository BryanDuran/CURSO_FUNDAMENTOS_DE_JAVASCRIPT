const numeroSecreto = Math.floor(Math.random() * 10 + 1) // 1 a 10
const numeroJugador = parseInt(prompt("Adivina el número secreto entre el 1 y el 10"));

console.log(`Este es el número con el que juegas: ${numeroJugador}`);


if (numeroJugador === numeroSecreto){
    console.log("!Felicidades, adivinaste el numero secreto¡");    
} else if (numeroJugador < numeroSecreto){
    console.log("El numero es demasiado bajo, intenta de nuevo");    
}else if( numeroJugador > numeroSecreto) {
    console.log("El numero es demasiado alto, intenta de nuevo");    
}else {
    console.log(`!Fallaste :( intenta de nuevo¡ el numero secreto era ${numeroSecreto}`);    
}