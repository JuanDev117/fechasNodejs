const fs = require('fs');


const filename = 'example.txt';



//crear
fs.writeFileSync( filename, "hola , este es un archivo de ejemplo");
console.log('Archivo creado');

//leer
const content = fs.readFileSync(filename, 'utf-8');
console.log('Contenido del archivo:', content);

//actualizar 
fs.appendFileSync(filename, '\nEste es un nuevo contenido agregado al archivo.');
console.log('Archivo actualizado'); 

// eliminar
fs.unlinkSync(filename);
console.log('Archivo eliminado');
