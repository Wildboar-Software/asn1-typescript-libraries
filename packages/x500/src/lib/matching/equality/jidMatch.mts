import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "asn1-ts";

// This is not technically correct, but close.
export
const jidMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.utf8String.toLowerCase() === value.utf8String.toLowerCase());
}

export default jidMatch;
