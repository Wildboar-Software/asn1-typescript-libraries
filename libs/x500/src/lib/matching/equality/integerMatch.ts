import EqualityMatcher from "../../types/EqualityMatcher";
import type { ASN1Element } from "asn1-ts";

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
