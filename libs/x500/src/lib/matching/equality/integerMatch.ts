import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

export
const integerMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    if (assertion.value.length !== value.value.length) {
        return false;
    }
    return (assertion.integer === value.integer);
}

export default integerMatch;
