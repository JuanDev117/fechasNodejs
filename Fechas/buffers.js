const {buffer} = require('buffer');

const bufferFromString = Buffer.from ('H',"utf-8");

console.log(bufferFromString);

//---------------------------------------------------------------------------------


const bufferAlloc = Buffer.alloc(10);

console.log(bufferAlloc);


bufferAlloc.write("nodejsxyz");

console.log(bufferAlloc);


const  buffertoString = bufferAlloc.toString('utf-8' ,  0,6);
console.log (buffertoString);