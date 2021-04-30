import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";
import compareUint8Arrays from "../../comparators/compareUint8Arrays";

export
const octetStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: Uint8Array = assertion.octetString;
    const v: Uint8Array = value.octetString;
    return compareUint8Arrays(a, v);
}

export default octetStringMatch;
