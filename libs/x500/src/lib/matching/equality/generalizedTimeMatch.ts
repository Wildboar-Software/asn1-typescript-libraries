import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

export
const generalizedTimeMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = assertion.generalizedTime.toISOString();
    const v: string = value.generalizedTime.toISOString();
    return (a === v);
}

export default generalizedTimeMatch;
