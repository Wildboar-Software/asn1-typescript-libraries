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
    return Number(readInteger(assertion) - readInteger(value));
}

export default integerOrderingMatch;
