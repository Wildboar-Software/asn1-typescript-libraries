import type { IntegerInput } from "../readValue.mjs";
import { readInteger, readLeadingInteger } from "../readValue.mjs";
import { integerMatchTyped } from "./integerMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.1
 * `integerFirstComponentMatch`.
 *
 * Compares a presented INTEGER with a SEQUENCE whose first
 * component is a mandatory INTEGER. TRUE iff that first component
 * equals the presented integer. The assertion syntax is derived
 * from the first SEQUENCE component.
 *
 * `assertion` is an element, `number`, or `bigint`. `value` is a
 * SEQUENCE element, or that integer already (element, `number`, or
 * `bigint`).
 */
export
function integerFirstComponentMatch (
    assertion: IntegerInput,
    value: IntegerInput,
): boolean {
    return integerFirstComponentMatchTyped(
        readInteger(assertion),
        readLeadingInteger(value),
    );
}

/**
 * `integerFirstComponentMatch` on the presented integer and the
 * stored first component.
 *
 * @param assertion Presented integer.
 * @param value Stored first component.
 * @returns `true` when the integers are equal.
 */
export
function integerFirstComponentMatchTyped (
    assertion: bigint,
    value: bigint,
): boolean {
    return integerMatchTyped(assertion, value);
}

export default integerFirstComponentMatch;
