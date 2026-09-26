import type { DirectoryStringInput } from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.2
 * `caseIgnoreOrderingMatch`.
 *
 * Same as `caseExactOrderingMatch` except upper-case is folded
 * during string preparation (clause 7.2). Insignificant spaces are
 * ignored (clause 7.6). Directory TRUE iff the stored value is
 * less than the presented value under Unicode code-point order.
 *
 * Each argument may be an `ASN1Element`, a directory string, or a
 * JavaScript string. A negative result means `assertion` sorts
 * before `value`.
 */
export
function caseIgnoreOrderingMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
): number {
    return caseIgnoreOrderingMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
    );
}

/**
 * `caseIgnoreOrderingMatch` on two strings.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @returns Negative when `assertion` is less than `value`.
 */
export
function caseIgnoreOrderingMatchTyped (assertion: string, value: string): number {
    const a: string = assertion.trim().toLowerCase();
    const v: string = value.trim().toLowerCase();
    return a.localeCompare(v);
}

export default caseIgnoreOrderingMatch;
