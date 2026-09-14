import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.2 `integerMatch`.
 *
 * TRUE iff a presented INTEGER or ENUMERATED value equals the
 * stored INTEGER or ENUMERATED value.
 */
export
const integerMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    // We can directly compare buffers because INTEGER is encoded the same way
    // every time in {BER,CER,DER}.
    return !Buffer.compare(assertion.value, value.value);
}

export default integerMatch;
