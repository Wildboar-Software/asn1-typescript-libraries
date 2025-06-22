import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

export
const objectIdentifierMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    // We can directly compare buffers because OBJECT IDENTIFIER is encoded the
    // same way every time in {BER,CER,DER}.
    return !Buffer.compare(assertion.value, value.value);
}

export default objectIdentifierMatch;
