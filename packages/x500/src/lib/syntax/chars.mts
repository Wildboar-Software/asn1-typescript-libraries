/**
 * ASCII character classes shared by the X.520 syntax validators.
 * Code units above U+007F are never members of these classes.
 */

export
function isAlpha (code: number): boolean {
    return (code >= 0x41 && code <= 0x5A)
        || (code >= 0x61 && code <= 0x7A);
}

export
function isDigit (code: number): boolean {
    return code >= 0x30 && code <= 0x39;
}

export
function isAlphaNum (code: number): boolean {
    return isAlpha(code) || isDigit(code);
}

export
function isHex (code: number): boolean {
    return isDigit(code)
        || (code >= 0x41 && code <= 0x46)
        || (code >= 0x61 && code <= 0x66);
}

/** LDH code point: ASCII letter, digit, or hyphen. */
export
function isLdhCode (code: number): boolean {
    return isAlphaNum(code) || code === 0x2D;
}
