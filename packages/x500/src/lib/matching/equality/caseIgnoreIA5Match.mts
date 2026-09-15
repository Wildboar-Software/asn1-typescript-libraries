import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.2
 * `caseIgnoreIA5Match` (LDAP-defined).
 *
 * Compares IA5String values after string preparation (clause 7.2).
 * TRUE iff the prepared strings have the same number of characters
 * and corresponding characters have the same code point after case
 * mapping.
 */
export
const caseIgnoreIA5Match: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string | undefined = prepString(assertion.ia5String);
    const v: string | undefined = prepString(value.ia5String);
    if (a === undefined) {
        return false;
        // throw new Error("5f4ce135-89b5-482a-9c03-fe1d0c0ae483: Invalid characters in caseIgnoreIA5Match assertion.");
    }
    if (v === undefined) {
        return false;
    }
    return (a.toLowerCase() === v.toLowerCase());
}

export default caseIgnoreIA5Match;
