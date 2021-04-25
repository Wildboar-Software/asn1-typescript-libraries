import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";

export
const objectIdentifierFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: OBJECT_IDENTIFIER = assertion.objectIdentifier;
    const v: OBJECT_IDENTIFIER = value.sequence[0].objectIdentifier;
    return (a.toString() === v.toString());
}

export default objectIdentifierFirstComponentMatch;
