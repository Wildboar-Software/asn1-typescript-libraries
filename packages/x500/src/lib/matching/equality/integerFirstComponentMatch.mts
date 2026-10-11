import type { IntegerInput } from "../readValue.mjs";
import { readInteger, readLeadingInteger } from "../readValue.mjs";

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
    return readInteger(assertion) === readLeadingInteger(value);
}

export default integerFirstComponentMatch;
