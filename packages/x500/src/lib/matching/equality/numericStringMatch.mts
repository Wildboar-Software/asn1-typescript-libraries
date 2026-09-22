import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.4 `numericStringMatch`.
 *
 * Equality of `NumericString` after removing all spaces (clause
 * 7.6.2). Otherwise the same as `caseIgnoreMatch` (case is
 * irrelevant because the characters are numeric).
 */
export
const numericStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = assertion.numericString.replace(/\s+/g, "");
    const v: string = value.numericString.replace(/\s+/g, "");
    return (a === v);
}

export default numericStringMatch;
