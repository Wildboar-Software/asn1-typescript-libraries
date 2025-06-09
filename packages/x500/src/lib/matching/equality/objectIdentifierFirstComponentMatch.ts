import EqualityMatcher from "../../types/EqualityMatcher.js";
import { ASN1Element, OBJECT_IDENTIFIER, BERElement } from "asn1-ts";

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
