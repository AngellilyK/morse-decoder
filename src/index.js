const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
    let array = expr.split('**********');

    let el= array.map((x)=> {
        let decodeText = '';
        for (let i = 0; i < x.length / 10; i++) {
            let el = '';
            for (let j = i * 10; j < i * 10 + 10; j += 2) {
                if (x[j] + x[j + 1] === '10') {
                    el += '.';
                } else if (x[j] + x[j + 1] === '11') {
                    el += '-';
                }
            }

            decodeText += MORSE_TABLE[el];
            el = '';
        }
        return decodeText;
    });

    return el.join(' ');
}


module.exports = {
    decode
}