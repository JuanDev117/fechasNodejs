const fs = require('fs');
const path = require('path');

async function transcript(audioFilePath,apikey) {
    try{

        if (!fs.existsSync(audioFilePath)) {
            throw new Error('El archivo de audio no existe');
        }

        const audioFile = fs.read(audioFilePath) ;
        const formData = new FormData();
        const blob = new blob ([adioFile]); 

        fromdata.append(`file`,blob, path.basename(audioFilePath));
        formData.append('model', 'whisper-1');



    }catch(error){

    }
    

    
}