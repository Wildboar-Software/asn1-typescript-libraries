/**
 * Remove every SPACE (X.520 clause 7.6.2) without allocating when
 * the string already has none. Other ASCII whitespace is also
 * dropped so malformed NumericString values keep the previous
 * `/\s+/g` behavior for TAB through CR.
 */
export
function stripSpaces (numeric: string): string {
    const len = numeric.length;
    let i = 0;
    while (i < len) {
        const c = numeric.charCodeAt(i);
        if (c === 0x20 || (c >= 0x09 && c <= 0x0d)) {
            break;
        }
        i++;
    }
    if (i === len) {
        return numeric;
    }
    let out = numeric.slice(0, i);
    for (i++; i < len; i++) {
        const c = numeric.charCodeAt(i);
        if (c === 0x20 || (c >= 0x09 && c <= 0x0d)) {
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
        if (c === 0x20 || c === 0x2d) {
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
        if (c === 0x20 || c === 0x2d) {
            continue;
        }
        out += telephoneNumber[i];
    }
    return out;
}
