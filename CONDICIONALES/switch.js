// SWITCH

/* switch(expresion){
    case valor1 :
        // codigo 1 a ejecutar
    break;
    case valor2 :
        // codigo 2 a ejecutar
    break
    case valor3 :
        // codigo 3 a ejecutar
    break
    case valor4 :
        // codigo 4 a ejecutar
    break
    default: codigo
} */

let expresion = "platanos"

switch(expresion){
    case "Naranjas" :
        console.log("Las naranajas cuentan $50 el kg");        
    break
    case "Limones" :
        console.log("Los Limones cuentan $10 el kg");        
    break
    case "Manzanas" :
        console.log("Las Manzanas cuentan $18 el kg");        
    break
    case "Peras" :
        console.log("Las Peras cuentan $12 el kg");        
    break
    case "Papayas" :
    case "Platanos":
        console.log("Los platanos y las papayas cuentan $60 el kg");        
    break
    default : console.log(`Lo siento no contamos con ${expresion}`);    
}

console.log("¿Hay algo mas que desees?");
