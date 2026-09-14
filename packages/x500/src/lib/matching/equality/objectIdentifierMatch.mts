import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.501 (10/2019), clause 13.5.2
 * `objectIdentifierMatch` (also 8.9.6).
 *
 * TRUE iff both OBJECT IDENTIFIER values have the same number of
 * integral components and each corresponding component is equal.
 * This is the inherent equality of ASN.1 object identifiers.
 */
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
