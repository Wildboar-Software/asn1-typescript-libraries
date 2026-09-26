import type { IntegerInput } from "../readValue.mjs";
import { readInteger } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.3 `integerOrderingMatch`.
 *
 * Directory TRUE iff the stored INTEGER is less than the presented
 * INTEGER. This function returns a signed comparison (assertion
 * versus stored). Negative means the assertion sorts before the
 * stored value. Comparison is on `bigint` so values outside the
 * IEEE-754 safe integer range keep the correct sign.
 *
 * Each argument may be an `ASN1Element`, a `number`, or a `bigint`.
 */
export
function integerOrderingMatch (
    assertion: IntegerInput,
    value: IntegerInput,
): number {
    const a = readInteger(assertion);
    const v = readInteger(value);
    if (a < v) {
        return -1;
    }
    if (a > v) {
        return 1;
    }
    return 0;
}

export default integerOrderingMatch;
