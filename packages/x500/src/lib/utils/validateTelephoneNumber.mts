const ASCII_PLUS: number = 0x2B;
const ASCII_SPACE: number = 0x20;
const ASCII_HYPHEN: number = 0x2D;
const ASCII_DIGIT_ZERO: number = 0x30;
const ASCII_DIGIT_NINE: number = 0x39;

/**
 * Rec. ITU-T X.520 (2019), clause 6.7.1 `TelephoneNumber`.
 *
 * International notation of Rec. ITU-T E.123 clause 2.5, carried in
 * a PrintableString of at most `ub-telephone-number` (32) characters:
 * a leading `+`, then digits, spaces, and hyphens, with at least one
 * digit. No other PrintableString character is allowed. A hyphen is one
 * spacing symbol (E.123 clause 9), so another hyphen is rejected until a
 * digit has appeared, including when only spaces sit between the hyphens.
 * Repeated spaces are allowed: clause 9.3 requires the gap between the
 * trunk code and the subscriber number to be wider than any other gap,
 * and a PrintableString can only show that with more than one space.
 * The same syntax is the `telephoneNumber` component of
 * `FacsimileTelephoneNumber`.
 *
 * @returns `true` when `value` conforms to that syntax.
 */
export
function validateTelephoneNumber (value: string): boolean {
    // ub-telephone-number INTEGER ::= 32
    if (value.length < 2 || value.length > 32 || value.charCodeAt(0) !== ASCII_PLUS) {
        return false;
    }
    let digits: number = 0;
    let precededByHyphen: boolean = false;
    for (let i = 1; i < value.length; i++) {
        const code: number = value.charCodeAt(i);
        if (code >= ASCII_DIGIT_ZERO && code <= ASCII_DIGIT_NINE) {
            digits++;
            precededByHyphen = false;
            continue;
        }
        if (code === ASCII_HYPHEN) {
            if (precededByHyphen) {
                return false;
            }
            precededByHyphen = true;
            continue;
        }
        if (code !== ASCII_SPACE) {
            return false;
        }
    }
    return digits > 0;
}
