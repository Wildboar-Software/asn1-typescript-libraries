import { ASN1Element } from "@wildboar/asn1";
import { readDecoded } from "../readValue.mjs";
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
    const stored = ASN1Element.isElement(value)
        ? _decode_AlgorithmIdentifier(value.sequence[0])
        : value;
    return compareAlgorithmIdentifier(stored, presented);
}

export default algorithmIdentifierMatch;
