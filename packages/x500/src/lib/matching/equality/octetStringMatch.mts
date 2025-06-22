import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

export
const octetStringMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: Uint8Array = assertion.octetString;
    const v: Uint8Array = value.octetString;
    return !Buffer.compare(a, v);
}

export default octetStringMatch;
