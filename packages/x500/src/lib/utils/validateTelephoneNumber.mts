/**
 * Rec. ITU-T X.520 (2019), clause 6.7.1 `TelephoneNumber`.
 *
 * International notation of Rec. ITU-T E.123 clause 2.5, carried in
 * a PrintableString of at most `ub-telephone-number` (32) characters:
 * a leading `+`, then digits, spaces, and hyphens, with at least one
 * digit. No other PrintableString character is allowed. The same
 * syntax is the `telephoneNumber` component of
 * `FacsimileTelephoneNumber`.
 *
 * @returns `true` when `value` conforms to that syntax.
 */
export
function validateTelephoneNumber (value: string): boolean {
    // ub-telephone-number INTEGER ::= 32
    if (value.length < 2 || value.length > 32 || value.charCodeAt(0) !== 0x2B) {
        return false;
    }
    let digits: number = 0;
    for (let i = 1; i < value.length; i++) {
        const code: number = value.charCodeAt(i);
        if (code >= 0x30 && code <= 0x39) {
            digits++;
            continue;
        }
        if (code !== 0x20 && code !== 0x2D) {
            return false;
        }
    }
    return digits > 0;
}
