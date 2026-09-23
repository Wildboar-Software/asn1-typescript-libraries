import type { IntegerInput } from "../readValue.mjs";
import { readInteger } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.3 `integerOrderingMatch`.
 *
 * Directory TRUE iff the stored INTEGER is less than the presented
 * INTEGER. This function returns a signed comparison (assertion
 * versus stored).
 *
 * Each argument may be an `ASN1Element`, a `number`, or a `bigint`.
 */
export
function integerOrderingMatch (
    assertion: IntegerInput,
    value: IntegerInput,
): number {
    return integerOrderingMatchTyped(readInteger(assertion), readInteger(value));
}

/**
 * `integerOrderingMatch` on two integers. The difference is coerced
 * with `Number`, as before.
 *
 * @param assertion Presented integer.
 * @param value Stored integer.
 * @returns `Number(assertion - value)`.
 */
export
function integerOrderingMatchTyped (assertion: bigint, value: bigint): number {
    return Number(assertion - value);
}

export default integerOrderingMatch;
