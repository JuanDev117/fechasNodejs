console.log (`hora actual ;`, new Date().toLocaleTimeString());


const timeOut = setTimeout(() => {
     console.log(`Esto se ejecuta después de 7segundos`);
     console.log ("hora acrual ;" ,  new Date().toLocaleTimeString());
}, 7000);


setImmediate(() => {
    console.log("este mensajenaparec en la proccima iteracion de el bucle")
    console.log (`hora actual ;`, new Date().toLocaleTimeString());
});

const intervalId = setInterval (() => {
    console.log("Este mensaje aparece cada 3 segundos ")
} , 5000);

 const timeOutId = setTimeout (() => {
console.log ( "Cancelar el intervalo despuesd e 10 segundos ");
clearInterval (intervalId);
}, 10000);


clearTimeout (timeOutId);


console.log (`hora actual ;`, new Date().toLocaleTimeString());