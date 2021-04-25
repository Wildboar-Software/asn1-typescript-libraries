import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

export
const caseIgnoreIA5Match: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.ia5String.toLowerCase() === value.ia5String.toLowerCase());
}

export default caseIgnoreIA5Match;
