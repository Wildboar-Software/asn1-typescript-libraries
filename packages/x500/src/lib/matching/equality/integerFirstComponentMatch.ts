import EqualityMatcher from "../../types/EqualityMatcher.js";
import { ASN1Element, INTEGER, BERElement } from "asn1-ts";

export
const integerFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const value_ = new BERElement();
    value_.fromBytes(value.value); // Just reads the first element from the bytes.
    // We can directly compare buffers because INTEGER is encoded the same way
    // every time in {BER,CER,DER}.
    return !Buffer.compare(assertion.value, value_.value);
}

export default integerFirstComponentMatch;
