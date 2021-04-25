import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, INTEGER } from "asn1-ts";

export
const integerFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: INTEGER = assertion.integer;
    const v: INTEGER = value.sequence[0].integer;
    return (a === v);
}

export default integerFirstComponentMatch;
