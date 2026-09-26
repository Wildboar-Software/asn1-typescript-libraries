import type { DirectoryStringListInput } from "../readValue.mjs";
import { readDirectoryStringList } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.7 `caseIgnoreListMatch`.
 *
 * Equality of a SEQUENCE OF `UnboundedDirectoryString` (e.g.
 * postal address lines). TRUE iff both sequences have the same
 * number of strings and corresponding strings match as for
 * `caseIgnoreMatch` (case and insignificant spaces ignored).
 *
 * Each argument may be an `ASN1Element`, a `PostalAddress` or
 * `CaseIgnoreList`, or an array of directory strings and/or
 * JavaScript strings.
 */
export
function caseIgnoreListMatch (
    assertion: DirectoryStringListInput,
    value: DirectoryStringListInput,
): boolean {
    return caseIgnoreListMatchTyped(
        readDirectoryStringList(assertion),
        readDirectoryStringList(value),
    );
}

/**
 * `caseIgnoreListMatch` on two lists of strings. Each line is case
 * folded and then prepared, matching the historical order of those
 * steps for this rule.
 *
 * @param assertion Presented lines.
 * @param value Stored lines.
 * @returns `true` when every corresponding line matches.
 */
export
function caseIgnoreListMatchTyped (
    assertion: readonly string[],
    value: readonly string[],
): boolean {
    if (assertion.length !== value.length) {
        return false;
    }
    for (let i = 0; i < assertion.length; i++) {
        const a: string | undefined = prepString(assertion[i].toLowerCase());
        const v: string | undefined = prepString(value[i].toLowerCase());
        if (a === undefined) {
            return false;
        }
        if (v === undefined) {
            return false;
        }
        if (a !== v) {
            return false;
        }
    }
    return true;
}

export default caseIgnoreListMatch;
