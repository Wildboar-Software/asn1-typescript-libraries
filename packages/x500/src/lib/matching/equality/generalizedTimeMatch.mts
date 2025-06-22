import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

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
