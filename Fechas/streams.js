const fs = require('fs'); 

const readableStream = fs.createReadStream('libro.txt', {encoding: 'utf-8'});


const writableStream  = fs.createWriteStream('libro_copia.txt'); 


readableStream.on ("data",(chunk) => {

    console.log ("chunk recibido: ", chunk);
    
    writableStream.write(chunk);

});

readableStream.on("end", () => {
    console.log ("Termino la lectura de el archivo ");
         writableStream.end();

});


readableStream.on("error", (err) => { 
    console.log ("Error al leer el archivo: ", err);
});

writableStream.on("error", (err) => {
    console.log ("Error al escribir el archivo: ", err);
});