const ASCII_SPACE: number = 0x20;
const ASCII_HYPHEN: number = 0x2D;

/**
 * Remove every ASCII SPACE (X.520 clause 7.6.2) without allocating
 * when the `NumericString` already has none. Other characters are
 * left unchanged: a valid `NumericString` may contain only digits
 * and SPACE.
 */
export
function removeAllAsciiSpaceCharacters (numeric: string): string {
    const len = numeric.length;
    let i = 0;
    while (i < len) {
        if (numeric.charCodeAt(i) === ASCII_SPACE) {
            break;
        }
        i++;
    }
    if (i === len) {
        return numeric;
    }
    let out = numeric.slice(0, i);
    for (i++; i < len; i++) {
        if (numeric.charCodeAt(i) === ASCII_SPACE) {
            continue;
        }
        out += numeric[i];
    }
    return out;
}

/**
 * Hyphens and spaces are insignificant for telephone-number
 * matching (X.520). Other characters, including `+`, stay.
 * Returns the original string when neither character is present.
 */
export
function normalizeTelephoneNumber (telephoneNumber: string): string {
    const len = telephoneNumber.length;
    let i = 0;
    while (i < len) {
        const c = telephoneNumber.charCodeAt(i);
        if (c === ASCII_SPACE || c === ASCII_HYPHEN) {
            break;
        }
        i++;
    }
    if (i === len) {
        return telephoneNumber;
    }
    let out = telephoneNumber.slice(0, i);
    for (i++; i < len; i++) {
        const c = telephoneNumber.charCodeAt(i);
        if (c === ASCII_SPACE || c === ASCII_HYPHEN) {
            continue;
        }
        out += telephoneNumber[i];
    }
    return out;
}
