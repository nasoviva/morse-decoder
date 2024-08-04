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
    let encodeStr = '';
    let partExpr = '';
    let letter = '';
    let code = '';
    let count = 0;
    while (count <= expr.length - 10) {
        partExpr = expr.slice(count, count + 10);
        partExpr = partExpr.replaceAll('11', '-');
        partExpr = partExpr.replaceAll('10', '.');
        partExpr = partExpr.replaceAll('**********', ' ');
        for (i = 0; i < partExpr.length; i++) {
            while (partExpr[i] === '0' && i < partExpr.length) {
                i++;
            }
            code = '';
            while (i < partExpr.length) {
                code = code + partExpr[i];
                i++;
            }
            for ((key) in MORSE_TABLE) {
                if (key === code) {
                    letter = MORSE_TABLE[key];
                    encodeStr = encodeStr + letter;
                }
            }
            if (partExpr === ' ') {
                encodeStr = encodeStr + ' ';
            }
        }
        count = count + 10;
    }
    return encodeStr;
}

module.exports = {
    decode
}
