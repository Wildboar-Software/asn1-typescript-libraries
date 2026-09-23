import type { CharacterStringInput } from "../readValue.mjs";
import { readNumericString } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.5
 * `numericStringOrderingMatch`.
 *
 * Same as `caseIgnoreOrderingMatch` except all spaces are removed
 * (clause 7.6.2). Directory TRUE iff the stored `NumericString` is
 * less than the presented value.
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function numericStringOrderingMatch (
    assertion: CharacterStringInput,
    value: CharacterStringInput,
): number {
    return numericStringOrderingMatchTyped(
        readNumericString(assertion),
        readNumericString(value),
    );
}

/**
 * `numericStringOrderingMatch` on two numeric strings.
 *
 * @param assertion Presented numeric string.
 * @param value Stored numeric string.
 * @returns Negative when `assertion` is less than `value`.
 */
export
function numericStringOrderingMatchTyped (assertion: string, value: string): number {
    const a: string = assertion.replace(/\s+/g, "");
    const v: string = value.replace(/\s+/g, "");
    return a.localeCompare(v);
}

export default numericStringOrderingMatch;
