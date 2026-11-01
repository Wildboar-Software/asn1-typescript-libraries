import { ASN1Element } from "@wildboar/asn1";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
} from "../../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import compareAlgorithmIdentifier from "../../comparators/compareAlgorithmIdentifier.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.7
 * `algorithmIdentifierMatch`.
 *
 * Equality for `SupportedAlgorithm`. TRUE iff the presented
 * `AlgorithmIdentifier` equals the `algorithmIdentifier` component
 * of the stored value. An already-decoded `AlgorithmIdentifier` is
 * that component.
 *
 * @param assertion Presented algorithm identifier.
 * @param value Stored supported algorithm, or its algorithm identifier
 *  already decoded.
 */
export
function algorithmIdentifierMatchTyped (
    assertion: AlgorithmIdentifier,
    value: AlgorithmIdentifier | ASN1Element,
): boolean | undefined {
    const stored = ASN1Element.isElement(value)
        ? _decode_AlgorithmIdentifier(value.sequence[0])
        : value;
    return compareAlgorithmIdentifier(stored, assertion);
}

algorithmIdentifierMatchTyped satisfies TypedEquationFunction<AlgorithmIdentifier>;

/**
 * `algorithmIdentifierMatch` as a `Matcher`.
 */
export
const algorithmIdentifierMatch: Matcher = createEqualityMatcher(
    _decode_AlgorithmIdentifier,
    algorithmIdentifierMatchTyped,
    undefined,
    true,
);

export default algorithmIdentifierMatch;
