import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

export
const uTCTimeMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = assertion.utcTime.toISOString();
    const v: string = value.utcTime.toISOString();
    return (a === v);
}

export default uTCTimeMatch;
