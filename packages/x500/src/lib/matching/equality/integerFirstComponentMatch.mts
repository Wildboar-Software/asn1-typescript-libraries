import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element, BERElement } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.1
 * `integerFirstComponentMatch`.
 *
 * Compares a presented INTEGER with a SEQUENCE whose first
 * component is a mandatory INTEGER. TRUE iff that first component
 * equals the presented integer. The assertion syntax is derived
 * from the first SEQUENCE component.
 */
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
