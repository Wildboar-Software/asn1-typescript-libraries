import type {
    DirectoryStringInput,
} from "../readValue.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.1 `caseIgnoreMatch`.
 *
 * Equality match of `UnboundedDirectoryString` /
 * `DirectoryString` after string preparation (clause 7). Case is
 * ignored (upper-case folded as in clause 7.2) and insignificant
 * spaces are removed (clause 7.6). TRUE iff the prepared strings
 * have the same length and identical corresponding characters.
 *
 * Used as the equality rule for many selected attribute types
 * (e.g. `commonName`, `organizationName`).
 *
 * `assertion` and `value` are read independently. Each may be an
 * `ASN1Element`, a `DirectoryString` / `UnboundedDirectoryString`,
 * or a JavaScript `string`.
 */
export
function caseIgnoreMatch (
    assertion: DirectoryStringInput,
    value: DirectoryStringInput,
): boolean {
    return caseIgnoreMatchTyped(
        readDirectoryString(assertion),
        readDirectoryString(value),
    );
}

/**
 * `caseIgnoreMatch` on two strings. String preparation and case
 * folding happen here so this function stays monomorphic.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @returns `true` when the prepared strings are equal ignoring case.
 */
export
function caseIgnoreMatchTyped (assertion: string, value: string): boolean {
    const a: string | undefined = prepString(assertion);
    const v: string | undefined = prepString(value);
    if (a === undefined) {
        return false;
    }
    if (v === undefined) {
        return false;
    }
    // The specification specifically says that you lowercase prior to comparison.
    return (a.toLowerCase() === v.toLowerCase());
}

export default caseIgnoreMatch;
