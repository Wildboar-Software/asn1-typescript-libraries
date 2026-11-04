import { isDigit } from "./chars.mjs";

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
        if (isDigit(code)) {
            digits++;
            continue;
        }
        if (code !== 0x20 && code !== 0x2D) {
            return false;
        }
    }
    return digits > 0;
}

/**
 * Digits and spaces, length 1..`max`, with at least one digit.
 * `NumericString` is the carrier for the E.164 and X.121 syntaxes;
 * spaces are insignificant to `numericStringMatch` but they occupy
 * the size constraint.
 */
function validateNumericAddress (value: string, max: number): boolean {
    if (value.length < 1 || value.length > max) {
        return false;
    }
    let digits: number = 0;
    for (let i = 0; i < value.length; i++) {
        const code: number = value.charCodeAt(i);
        if (isDigit(code)) {
            digits++;
            continue;
        }
        if (code !== 0x20) {
            return false;
        }
    }
    return digits > 0;
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.7.6 `InternationalISDNNumber`.
 *
 * NumericString of size 1 to `ub-international-isdn-number` (16)
 * holding an E.164 number. The `+` prefix is not part of this syntax.
 * Spaces are permitted because the carrier is NumericString. The
 * assigned E.164 numbering plan is not checked.
 *
 * @returns `true` when `value` conforms to that syntax.
 */
export
function validateInternationalISDNNumber (value: string): boolean {
    return validateNumericAddress(value, 16);
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.7.5 `X121Address`.
 *
 * NumericString of size 1 to `ub-x121-address` (15). Spaces are
 * permitted because the carrier is NumericString. The X.121 numbering
 * plan is not checked.
 *
 * @returns `true` when `value` conforms to that syntax.
 */
export
function validateX121Address (value: string): boolean {
    return validateNumericAddress(value, 15);
}
