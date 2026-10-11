import type { ASN1Element } from "@wildboar/asn1";
import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type {
    PreparedSubstring,
    SubstringAssertionInput,
} from "../readValue.mjs";
import { readSubstringAssertion } from "../readValue.mjs";

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
    value: ASN1Element | string,
    _selection?: SubstringSelection,
): boolean {
    return caseIgnoreIA5SubstringsMatchTyped(
        readSubstringAssertion(assertion),
        typeof value === "string" ? value : value.ia5String,
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
            return value.startsWith(str.value);
        } else if (str.kind === "any") {
            return (value.indexOf(str.value) > -1);
        } else if (str.kind === "final") {
            return value.endsWith(str.value);
        } else {
            return false;
        }
    });
}

export default caseIgnoreIA5SubstringsMatch;
