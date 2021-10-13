import type { TeletexString } from "asn1-ts";

// See https://en.wikipedia.org/wiki/ITU_T.61
const teletexCharToStringCharMap: Map<number, number> = new Map([
    // [ 0x08, 0x08 ],
    // [ 0x0A, 0x0A ],
    // [ 0x0A, 0x0A ],
    // [ 0x0A, 0x0A ],
    // [ 0x0A, 0x0A ],
    // [ 0x19,]
    [ 0xA6, 0x23 ],
    [ 0xA8, 0xA4 ],
    [ 0xB4, 0xD7 ],
    [ 0xB8, 0xF7 ],
    [ 0xE0, 0x2126 ],
    [ 0xE1, 0xC6 ],
    [ 0xE2, 0xD0 ],
    [ 0xE3, 0xAA ],
    [ 0xE4, 0x0126 ],
    [ 0xE6, 0x0132 ],
    [ 0xE7, 0x013F ],
    [ 0xE8, 0x0141 ],
    [ 0xE9, 0xD8 ],
    [ 0xEA, 0x0152 ],
    [ 0xEB, 0xBA ],
    [ 0xEC, 0xDE ],
    [ 0xED, 0x0166 ],
    [ 0xEE, 0x014A ],
    [ 0xEF, 0x0149 ],
    [ 0xF0, 0x0138 ],
    [ 0xF1, 0xE6 ],
    [ 0xF2, 0x0111 ],
    [ 0xF3, 0xF0 ],
    [ 0xF4, 0x0127 ],
    [ 0xF5, 0x0131 ],
    [ 0xF6, 0x0133 ],
    [ 0xF7, 0x0140 ],
    [ 0xF8, 0x0142 ],
    [ 0xF9, 0xF8 ],
    [ 0xFA, 0x0153 ],
    [ 0xFB, 0xDF ],
    [ 0xFC, 0xFE ],
    [ 0xFD, 0x0167 ],
    [ 0xFE, 0x014B ],
    // Accent bytes
    [ 0xC1, 0x0300 ],
    [ 0xC2, 0x0301 ],
    [ 0xC3, 0x0302 ],
    [ 0xC4, 0x0303 ],
    [ 0xC5, 0x0304 ],
    [ 0xC6, 0x0306 ],
    [ 0xC7, 0x0307 ],
    [ 0xC8, 0x0308 ],
    [ 0xC9, 0x0308 ],
    [ 0xCA, 0x030A ],
    [ 0xCB, 0x0327 ],
    [ 0xCC, 0x0332 ],
    [ 0xCD, 0x030B ],
    [ 0xCE, 0x0328 ],
    [ 0xCF, 0x030C ],
]);

// NOTE: 0 - 127 are identical to ASCII.

/**
 * @summary Convert a T.61 / Teletex String into a normal Unicode string.
 * @description
 *
 * This implementation is not known to be correct. There is not enough test data
 * out there, and frankly, the value of this code is pretty low. Just don't use
 * Teletex. It was abandoned by the ITU, after all.
 *
 * Any characters not recognized as valid T.61 characters are simply passed
 * through to Unicode.
 *
 * This implementation handles conversion diacritic modifiers.
 *
 * @param ttex The raw bytes of the T.61 string.
 * @returns The `string` equivalent.
 */
export
function teletexToString (ttex: TeletexString): string {
    /**
     * In T.61, the accents prefix a base character, whereas they postfix it
     * in Unicode. This variable exists to store a prefix to perform this swap.
     */
    let accent: number | undefined;
    const codePoints: number[] = [];
    for (const byte of Array.from(ttex)) {
        const equiv = teletexCharToStringCharMap.get(byte);
        if (equiv) {
            if (
                (byte >= 0xC0)
                && (byte <= 0xCF)
            ) {
                if (accent) {
                    throw new Error(); // Accent was already set.
                }
                accent = equiv;
                continue;
            }
            codePoints.push(equiv);
        } else {
            codePoints.push(byte);
        }
        if (accent) {
            codePoints.push(accent);
            accent = undefined;
        }
    }
    return String.fromCodePoint(...codePoints);
}

export default teletexToString;
