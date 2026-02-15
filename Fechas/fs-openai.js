const { error } = require('console');
const fs = require('fs');
const path = require('path');

async function transcript(audioFilePath,apikey) {
    try{

        if (!fs.existsSync(audioFilePath)) {
            throw new Error('El archivo de audio no existe');
        }

        const audioFile = fs.readFileSync(audioFilePath);
        const formData = new FormData();
        const blob = new Blob([audioFile]);

        formData.append(`file`, blob, path.basename(audioFilePath));
        formData.append('model', 'whisper-large-v3');

        const response = await fetch(`https://api.groq.com/openai/v1/audio/transcriptions`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${apikey}`
            },
            body: formData
        });

        if (!response.ok) {

            const errorData= await response.json();
            throw new Error(`error en la api :${JSON.stringify(errorData)}`);
             
        }

        const data = await response.json();

        const transcription= data.text; 


        const outputFilePath= path.join(path.dirname(audioFilePath),    `${path.basename(audioFilePath, 
            path.extname(audioFilePath))}.txt`); 

            fs.writeFileSync(outputFilePath,transcription);
            console.log(`Transcripción guardada en: ${outputFilePath}`);
            return  transcription;



    } catch (error) {
        // log the real message so we don't get undefined
        console.error('Error durante la transcripción:', error.message);
        throw error;
    }
}

// make the function available for import in other modules
module.exports = { transcript };



const audioPath = './Grabación.mp3';

const apiKey = 'api de grpq'; 


transcript(audioPath,apiKey)
.then(transcription => {
    console.log('Transcripción completada con exito :');
    console.log(transcription);
})
.catch(error => {
    console.error(`Fallo la transcripción: ${error.message}`);
})


------