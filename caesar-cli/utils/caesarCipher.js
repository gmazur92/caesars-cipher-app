export const caesarCipher = (string, shift, action) => {
  shift = parseInt(shift, 10);
  const ALPHABET_LENGTH = 26;
  const CHARCODES = {
    SMALL_START: 97,
    CAPITAL_START: 65,
    SMALL_END: 122,
    CAPITAL_END: 90,
  };

  let result = '';
  if (action === 'encode' && shift < 0) {
    shift = shift * -1;
    action = 'decode';
  }
  if (action === 'decode' && shift < 0) {
    shift = shift * -1;
    action = 'encode';
  }

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    if (
      (charCode < CHARCODES.CAPITAL_START || charCode > CHARCODES.SMALL_END) ||
      (charCode > CHARCODES.CAPITAL_END && charCode < CHARCODES.SMALL_START)
    ) {
      result += string[ i ];
    } else {
      let newCharCode;
      if (action === 'encode') {
        if (charCode >= CHARCODES.CAPITAL_START && charCode <= CHARCODES.CAPITAL_END) {
          newCharCode = ((charCode + shift - CHARCODES.CAPITAL_START) % ALPHABET_LENGTH) + CHARCODES.CAPITAL_START;
        }
        if (charCode >= CHARCODES.SMALL_START && charCode <= CHARCODES.SMALL_END) {
          newCharCode = ((charCode + shift - CHARCODES.SMALL_START) % ALPHABET_LENGTH) + CHARCODES.SMALL_START;
        }
      } else {
        const positiveShift = ALPHABET_LENGTH - (shift % ALPHABET_LENGTH);
        if (charCode >= CHARCODES.CAPITAL_START && charCode <= CHARCODES.CAPITAL_END) {
          newCharCode = ((charCode + positiveShift - CHARCODES.CAPITAL_START) % ALPHABET_LENGTH) +
            CHARCODES.CAPITAL_START;
        }
        if (charCode >= CHARCODES.SMALL_START && charCode <= CHARCODES.SMALL_END) {
          newCharCode = ((charCode + positiveShift - CHARCODES.SMALL_START) % ALPHABET_LENGTH) + CHARCODES.SMALL_START;
        }
      }
      result += String.fromCharCode(newCharCode);
    }
  }
  return result;
};
