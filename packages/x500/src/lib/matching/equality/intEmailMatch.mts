import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

// This is not technically correct, but close.
export
const intEmailMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    return (assertion.utf8String.trim().toLowerCase() === value.utf8String.trim().toLowerCase());
}

export default intEmailMatch;
