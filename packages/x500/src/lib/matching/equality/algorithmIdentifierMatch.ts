import EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element } from "asn1-ts";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.js";
import compareAlgorithmIdentifier from "../../comparators/compareAlgorithmIdentifier.js";

export
const algorithmIdentifierMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: AlgorithmIdentifier = _decode_AlgorithmIdentifier(assertion);
    const probablyAnAlgorithmIdentifier: ASN1Element = value.sequence[0];
    const algId: AlgorithmIdentifier = _decode_AlgorithmIdentifier(probablyAnAlgorithmIdentifier);
    return compareAlgorithmIdentifier(algId, a);
}

export default algorithmIdentifierMatch;
