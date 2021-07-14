const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    let wordMorse = '';
    let word = '';
    for (let i = 0; i < expr.length; i += 10) {
        for (let x = 0; x < 10; x++) {
            wordMorse += expr[x + i];
        }
        if (wordMorse == '**********') {
            result += ' ';
        } else {
            word = wordMorse.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');
            result += MORSE_TABLE[word];
        }
        wordMorse = '';
        word = '';
    }
    return result;
}

module.exports = {
    decode
}