import { isAlpha, isDigit } from "./chars.mjs";

/**
 * Two ASCII letters, the shape of an ISO 3166-1 alpha-2 code.
 * The assigned-code repertoire is not consulted.
 */
function isTwoAsciiLetters (value: string): boolean {
    return value.length === 2
        && isAlpha(value.charCodeAt(0))
        && isAlpha(value.charCodeAt(1));
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.3.1 `CountryName`.
 *
 * PrintableString of size 2 in the shape of an ISO 3166-1 alpha-2
 * code: two ASCII letters, either case. The assigned-code repertoire
 * is not consulted.
 *
 * @returns `true` when `value` has that shape.
 */
export
function validateCountryName (value: string): boolean {
    return isTwoAsciiLetters(value);
}

/**
 * ISO 3166-1 alpha-2 shape: two ASCII letters, either case.
 *
 * This is the same syntactic check as `validateCountryName`. The
 * assigned-code repertoire is not consulted.
 *
 * @returns `true` when `value` is two ASCII letters.
 */
export
function validateCountryCode (value: string): boolean {
    return isTwoAsciiLetters(value);
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.3.2 `CountryCode3c`.
 *
 * PrintableString of size 3 in the shape of an ISO 3166-1 alpha-3
 * code: three ASCII letters, either case. The assigned-code
 * repertoire is not consulted.
 *
 * @returns `true` when `value` has that shape.
 */
export
function validateCountryCode3c (value: string): boolean {
    return value.length === 3
        && isAlpha(value.charCodeAt(0))
        && isAlpha(value.charCodeAt(1))
        && isAlpha(value.charCodeAt(2));
}

/**
 * Rec. ITU-T X.520 (2019), clause 6.3.3 `CountryCode3n`.
 *
 * NumericString of size 3 in the shape of an ISO 3166-1 numeric-3
 * code: three ASCII digits. The assigned-code repertoire is not
 * consulted.
 *
 * @returns `true` when `value` has that shape.
 */
export
function validateCountryCode3n (value: string): boolean {
    return value.length === 3
        && isDigit(value.charCodeAt(0))
        && isDigit(value.charCodeAt(1))
        && isDigit(value.charCodeAt(2));
}
