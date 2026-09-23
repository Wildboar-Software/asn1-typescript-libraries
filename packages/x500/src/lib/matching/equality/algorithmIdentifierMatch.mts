import type { ASN1Element } from "@wildboar/asn1";
import { isAsn1Element, readDecoded } from "../readValue.mjs";
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
function algorithmIdentifierMatch (
    assertion: ASN1Element | AlgorithmIdentifier,
    value: ASN1Element | AlgorithmIdentifier,
): boolean {
    const presented = readDecoded(assertion, _decode_AlgorithmIdentifier);
    const stored = isAsn1Element(value)
        ? _decode_AlgorithmIdentifier(value.sequence[0])
        : value;
    return algorithmIdentifierMatchTyped(presented, stored);
}

/**
 * `algorithmIdentifierMatch` on two algorithm identifiers. `value`
 * is the algorithm component of `SupportedAlgorithms`.
 *
 * @param assertion Presented algorithm.
 * @param value Stored algorithm.
 * @returns `true` when the algorithms are equal.
 */
export
function algorithmIdentifierMatchTyped (
    assertion: AlgorithmIdentifier,
    value: AlgorithmIdentifier,
): boolean {
    return compareAlgorithmIdentifier(value, assertion);
}

export default algorithmIdentifierMatch;
