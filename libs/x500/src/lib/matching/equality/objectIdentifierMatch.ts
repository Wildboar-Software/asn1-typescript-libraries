import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

export
const objectIdentifierMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    if (assertion.value.length !== value.value.length) {
        return false;
    }
    return assertion.objectIdentifier.isEqualTo(value.objectIdentifier);
}

export default objectIdentifierMatch;
