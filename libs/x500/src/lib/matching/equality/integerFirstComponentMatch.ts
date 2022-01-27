import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element, INTEGER } from "asn1-ts";

export
const integerFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const value_ = value.sequence[0];
    if (assertion.value.length !== value_.value.length) {
        return false;
    }
    const a: INTEGER = assertion.integer;
    const v: INTEGER = value_.integer;
    return (a === v);
}

export default integerFirstComponentMatch;
