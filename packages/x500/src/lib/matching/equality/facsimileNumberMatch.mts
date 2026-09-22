import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import telephoneNumberMatch from "./telephoneNumberMatch.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.13 `facsimileNumberMatch`.
 *
 * Compares a presented `TelephoneNumber` with the first element of
 * a facsimile sequence (`telephoneNumber`). The `parameters`
 * element is not evaluated. Matching of that number is as for
 * `telephoneNumberMatch`.
 */
export
const facsimileNumberMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => telephoneNumberMatch(assertion, value.sequence[0]);

export default facsimileNumberMatch;
