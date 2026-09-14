import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import { ASN1Element, OBJECT_IDENTIFIER, BERElement } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.4.2
 * `objectIdentifierFirstComponentMatch`.
 *
 * Compares a presented OBJECT IDENTIFIER with a SEQUENCE whose
 * first component is a mandatory OID. TRUE iff that first
 * component matches via `objectIdentifierMatch`. The assertion
 * syntax is derived from the first SEQUENCE component.
 */
export
const objectIdentifierFirstComponentMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const innerValue = new BERElement();
    innerValue.fromBytes(value.value); // Just reads the first element.
    const a: OBJECT_IDENTIFIER = assertion.objectIdentifier;
    const v: OBJECT_IDENTIFIER = innerValue.objectIdentifier;
    // We can directly compare buffers because OBJECT IDENTIFIER is encoded the
    // same way every time in {BER,CER,DER}.
    return !Buffer.compare(assertion.value, innerValue.value);
}

export default objectIdentifierFirstComponentMatch;
