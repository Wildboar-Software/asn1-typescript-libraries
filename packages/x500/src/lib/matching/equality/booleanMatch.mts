import type { BooleanInput } from "../readValue.mjs";
import { readBoolean } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.1 `booleanMatch`.
 *
 * TRUE iff both BOOLEAN values are TRUE or both are FALSE.
 *
 * Each argument may be an `ASN1Element` or a JavaScript `boolean`.
 */
export
function booleanMatch (
    assertion: BooleanInput,
    value: BooleanInput,
): boolean {
    return booleanMatchTyped(readBoolean(assertion), readBoolean(value));
}

/**
 * `booleanMatch` on two booleans.
 *
 * @param assertion Presented boolean.
 * @param value Stored boolean.
 * @returns `true` when both are TRUE or both are FALSE.
 */
export
function booleanMatchTyped (assertion: boolean, value: boolean): boolean {
    return assertion === value;
}

export default booleanMatch;
