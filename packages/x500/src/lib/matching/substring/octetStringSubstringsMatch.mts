import { ASN1Element } from "@wildboar/asn1";
import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type {
    OctetSubstringAssertionInput,
    PreparedOctetSubstring,
} from "../readValue.mjs";
import { readOctetSubstringAssertion } from "../readValue.mjs";
import { partitionPreparedOctets } from "../../utils/substringPartition.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.7
 * `octetStringSubstringsMatch`.
 *
 * TRUE iff the stored OCTET STRING contains the presented
 * `OctetSubstringAssertion` octets with the same initial/any/final
 * partitioning as `caseIgnoreSubstringsMatch`.
 *
 * `assertion` is an element or an octet substring assertion.
 * `value` is an element or a `Uint8Array`. `selection` is unused.
 */
export
function octetStringSubstringsMatch (
    assertion: OctetSubstringAssertionInput,
    value: ASN1Element | Uint8Array,
    _selection?: SubstringSelection,
): boolean {
    return octetStringSubstringsMatchTyped(
        readOctetSubstringAssertion(assertion),
        ASN1Element.isElement(value) ? value.octetString : value,
    );
}

/**
 * `octetStringSubstringsMatch` on prepared octet pieces and a
 * stored octet string.
 *
 * @param assertion Presented octet pieces.
 * @param value Stored octets.
 * @returns `true` when the pieces partition `value` in order.
 */
export
function octetStringSubstringsMatchTyped (
    assertion: readonly PreparedOctetSubstring[],
    value: Uint8Array,
): boolean {
    return partitionPreparedOctets(value, assertion);
}

export default octetStringSubstringsMatch;
