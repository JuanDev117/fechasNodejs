const os = require('os');

function showSystemInfo() {

console.log (` sistema operativo: ${os.type()}`);
console.log (` arquitectura del procesador: ${os.arch()}`);
console.log (` plaraforma: ${os.platform()}`);
console.log (` versión del sistema operativo: ${os.release()}`);


}

showSystemInfo();