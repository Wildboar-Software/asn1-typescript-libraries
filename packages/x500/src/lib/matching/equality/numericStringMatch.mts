import type { CharacterStringInput } from "../readValue.mjs";
import { readNumericString } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.4 `numericStringMatch`.
 *
 * Equality of `NumericString` after removing all spaces (clause
 * 7.6.2). Otherwise the same as `caseIgnoreMatch` (case is
 * irrelevant because the characters are numeric).
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function numericStringMatch (
    assertion: CharacterStringInput,
    value: CharacterStringInput,
): boolean {
    return numericStringMatchTyped(
        readNumericString(assertion),
        readNumericString(value),
    );
}

/**
 * `numericStringMatch` on two numeric strings. Spaces are removed
 * here.
 *
 * @param assertion Presented numeric string.
 * @param value Stored numeric string.
 * @returns `true` when the digit sequences are equal.
 */
export
function numericStringMatchTyped (assertion: string, value: string): boolean {
    const a: string = assertion.replace(/\s+/g, "");
    const v: string = value.replace(/\s+/g, "");
    return (a === v);
}

export default numericStringMatch;
