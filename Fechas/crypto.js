const crypto = require('crypto');

 const text = ` hello , crypto world `;
 
 
 const hash = crypto.createHash('sha256').update(text).digest('hex');

 console.log(`texto original: `, text);

 console.log (`Hash SHA-256: ${hash}`);

