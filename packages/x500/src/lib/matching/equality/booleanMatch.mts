import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.1 `booleanMatch`.
 *
 * TRUE iff both BOOLEAN values are TRUE or both are FALSE.
 */
export
const booleanMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.boolean === value.boolean);
}

export default booleanMatch;
