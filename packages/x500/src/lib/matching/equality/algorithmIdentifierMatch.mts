import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import compareAlgorithmIdentifier from "../../comparators/compareAlgorithmIdentifier.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.7
 * `algorithmIdentifierMatch`.
 *
 * Equality for `SupportedAlgorithms`. TRUE iff the presented
 * `AlgorithmIdentifier` equals the `algorithmIdentifier` component
 * of the stored value.
 */
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
