import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

export
const caseExactIA5Match: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.ia5String.trim() === value.ia5String.trim());
}

export default caseExactIA5Match;
