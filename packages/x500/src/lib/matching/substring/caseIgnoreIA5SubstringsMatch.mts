import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type { CharacterStringInput } from "../readValue.mjs";
import type {
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import {
    readIA5String,
    readSubstringAssertion,
} from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.3
 * `caseIgnoreIA5SubstringsMatch` (LDAP-defined).
 *
 * Substring match of an IA5String stored value against a
 * `SubstringAssertion` after string preparation (clause 7.2). Same
 * partitioning rules as `caseIgnoreSubstringsMatch` (clause
 * 8.1.3).
 *
 * `assertion` is an element or a substring assertion. `value` is
 * an element or an IA5 string. `selection` is unused.
 */
export
function caseIgnoreIA5SubstringsMatch (
    assertion: SubstringAssertionInput,
    value: CharacterStringInput,
    _selection?: SubstringSelection,
): boolean {
    return caseIgnoreIA5SubstringsMatchTyped(
        readSubstringAssertion(assertion),
        readIA5String(value),
    );
}

/**
 * `caseIgnoreIA5SubstringsMatch` on prepared pieces and a stored
 * IA5 string. Case is not folded here, matching the previous
 * implementation.
 *
 * @param assertion Presented substring pieces.
 * @param value Stored IA5 string.
 * @returns `true` when every piece matches.
 */
export
function caseIgnoreIA5SubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    return assertion.every((str) => {
        if (str.kind === "initial") {
            return value.startsWith(str.text);
        } else if (str.kind === "any") {
            return (value.indexOf(str.text) > -1);
        } else if (str.kind === "final") {
            return value.endsWith(str.text);
        } else {
            return false;
        }
    });
}

export default caseIgnoreIA5SubstringsMatch;
