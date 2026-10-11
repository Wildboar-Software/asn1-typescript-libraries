const backslash = 0x5C;

/** Characters `escapeDistinguishedValue` can prefix with a backslash. */
const special = new Set<number>([
    0x20, // space
    0x22, // "
    0x23, // #
    0x2B, // +
    0x2C, // ,
    0x3B, // ;
    0x3C, // <
    0x3D, // =
    0x3E, // >
    0x5C, // \
]);

function isHex (code: number): boolean {
    return (code >= 0x30 && code <= 0x39)
        || (code >= 0x41 && code <= 0x46)
        || (code >= 0x61 && code <= 0x66);
}

function isHexPairAt (str: string, index: number): boolean {
    return index + 2 < str.length
        && str.charCodeAt(index) === backslash
        && isHex(str.charCodeAt(index + 1))
        && isHex(str.charCodeAt(index + 2));
}

function decodeUtf8 (bytes: number[]): string {
    try {
        return new TextDecoder("utf-8", { fatal: true }).decode(Uint8Array.from(bytes));
    } catch {
        throw new SyntaxError("malformed escape");
    }
}

/**
 * @summary Undo escapes produced by `escapeDistinguishedValue`.
 * @description
 *
 * Replaces escape pairs from left to right, without rescanning the
 * result, per [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514)
 * section 3. A backslash followed by a space, `"`, `#`, `+`, `,`, `;`,
 * `<`, `=`, `>`, or `\` yields that character. A backslash followed by
 * two hex digits yields that octet. Adjacent hex pairs are one UTF-8
 * sequence, which is how `\00` becomes NUL and `\C4\8D` becomes U+010D.
 *
 * @param str The escaped distinguished value.
 * @returns The unescaped value.
 * @throws {SyntaxError} When a backslash is not a valid escape pair.
 * The message is lowercase.
 * @function
 */
export
function unescapeDistinguishedValue (str: string): string {
    let ret = "";
    let i = 0;
    while (i < str.length) {
        if (str.charCodeAt(i) !== backslash) {
            ret += str.charAt(i);
            i++;
            continue;
        }
        if (special.has(str.charCodeAt(i + 1))) {
            ret += str.charAt(i + 1);
            i += 2;
            continue;
        }
        const bytes: number[] = [];
        while (isHexPairAt(str, i)) {
            bytes.push(Number.parseInt(str.slice(i + 1, i + 3), 16));
            i += 3;
        }
        if (bytes.length === 0) {
            throw new SyntaxError("malformed escape");
        }
        ret += decodeUtf8(bytes);
    }
    return ret;
}

export default unescapeDistinguishedValue;
