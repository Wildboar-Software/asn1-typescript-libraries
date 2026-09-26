import type { IntegerInput } from "../readValue.mjs";
import { readInteger } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.2 `integerMatch`.
 *
 * TRUE iff a presented INTEGER or ENUMERATED value equals the
 * stored INTEGER or ENUMERATED value.
 *
 * Each argument may be an `ASN1Element`, a `number`, or a `bigint`.
 */
export
function integerMatch (
    assertion: IntegerInput,
    value: IntegerInput,
): boolean {
    return readInteger(assertion) === readInteger(value);
}

export default integerMatch;
