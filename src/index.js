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
};

function decode(expr) {
    let result = '';
    let letter = '';

    for(let i = 0; i < expr.length; i++) {
        letter +=expr[i];
        if ( letter.length == 10 ){
            let morseLetter = '';

            for(let j = 1; j < 10; j+=2){
                let temp = letter[j-1] + letter[j];
                if(temp=='10') morseLetter+='.';
                if(temp=='11') morseLetter+='-'
            }
            if(letter == '**********')
                result +=' ';
            else
                result += MORSE_TABLE[morseLetter] ;
            letter = '';
            morseLetter = '';
        }
    }
    return result;
}

module.exports = {
    decode
}
