import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { compareBitStrings } from "../../comparators/compareBitStrings.mjs";

// TODO: Export this from @wildboar/asn1.

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.4 `bitStringMatch`.
 *
 * TRUE iff both BIT STRING values have the same number of bits and
 * the bits match bitwise. If the syntax is defined with a
 * `NamedBitList`, trailing zero bits in either value are ignored.
 */
export
const bitStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => compareBitStrings(assertion, value);

export default bitStringMatch;
