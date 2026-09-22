import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.1
 * `caseExactIA5Match` (LDAP-defined).
 *
 * Compares IA5String values after string preparation (clause 7).
 * TRUE iff the prepared strings have the same number of characters
 * and corresponding characters have the same code point. Case is
 * significant.
 */
export
const caseExactIA5Match: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string | undefined = prepString(assertion.ia5String);
    const v: string | undefined = prepString(value.ia5String);
    if ((a === undefined) || (v === undefined)) {
        return false;
    }
    return (a === v);
}

export default caseExactIA5Match;
