function getTimeStamp(){

    return Date.now();
}

function getLongTimeStamp(locale = 'en-Es'){

    const options = {
        weekday: 'long',
        year:    'numeric',
        month:   'long',
        day:     'numeric',
        hour:    '2-digit',
        minute:  '2-digit',
        second:  '2-digit',
        timeZoneName: 'short'
    };

    // devuelve la fecha actual con formato largo
    return new Date().toLocaleString(locale, options);
}

 module.exports = {
    getTimeStamp,
    getLongTimeStamp
 }