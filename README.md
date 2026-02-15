 carpeta fechas , el proyecto de fs-openai.js
---

# Transcriptor de Audio con Node.js y Groq (Whisper)

Este proyecto es una utilidad de backend escrita en **Node.js** que toma un archivo de audio local, lo envía a la API de **Groq** para ser procesado por el modelo **Whisper**, y guarda el resultado en un archivo de texto.

### 🚀 ¿Qué hace este código?

1. **Verifica:** Comprueba si el archivo de audio existe en la ruta especificada.
2. **Procesa:** Convierte el audio a un formato compatible con la API (`FormData` + `Blob`).
3. **Transcribe:** Envía el audio al modelo `whisper-large-v3` de Groq (una alternativa gratuita y ultrarrápida a OpenAI).
4. **Guarda:** Genera automáticamente un archivo `.txt` con el mismo nombre del audio en la misma carpeta.

---

### 🛠️ Requisitos previos

* **Node.js** instalado (versión 18 o superior para soporte nativo de `fetch`).
* **API Key de Groq:** Consíguela gratis en [console.groq.com](https://console.groq.com/).
* Un archivo de audio (ej: `Grabación.mp3`).

---

### 📦 Instalación y Uso

1. **Instala las dependencias necesarias:**
```bash
npm install dotenv

```


2. **Configura tu API Key:**
Crea un archivo `.env` en la raíz del proyecto y añade tu llave:
```text
GROQ_API_KEY=tu_gsk_llave_aqui

```


3. **Ejecución:**
Asegúrate de que el nombre del archivo en el código coincide con tu archivo de audio y corre:
```bash
node fs-openai.js

```



---

### 📂 Estructura de Salida

Si tu archivo se llama `Grabación.mp3`, el script generará:

* `Grabación.mp3` (Origen)
* `Grabación.txt` (Resultado de la transcripción)

---

### ⚠️ Notas de Seguridad

* El archivo `.env` está incluido en el `.gitignore` para evitar que tu API Key se suba a GitHub.
* Nunca pegues la llave directamente en el código fuente.

---

**¿Te gustaría que le añada una sección sobre cómo manejar diferentes formatos de audio (wav, m4a, etc.) o está bien así de simple?**
