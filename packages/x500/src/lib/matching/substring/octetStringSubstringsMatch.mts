import { Buffer } from "node:buffer";
import { ASN1Element } from "@wildboar/asn1";
import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type {
    OctetSubstringAssertionInput,
    PreparedOctetSubstring,
} from "../readValue.mjs";
import { readOctetSubstringAssertion } from "../readValue.mjs";

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
 * @returns `true` when every piece matches.
 */
export
function octetStringSubstringsMatchTyped (
    assertion: readonly PreparedOctetSubstring[],
    value: Uint8Array,
): boolean {
    const buf: Buffer = Buffer.from(value);
    return assertion.every((o) => {
        if (o.kind === "initial") {
            if (o.value.length > value.length) {
                return false;
            }
            return Buffer.compare(value.subarray(0, o.value.length), o.value) === 0;
        } else if (o.kind === "any") {
            return (buf.indexOf(o.value) > -1);
        } else if (o.kind === "final") {
            if (o.value.length > value.length) {
                return false;
            }
            return Buffer.compare(
                value.subarray(value.length - o.value.length),
                o.value,
            ) === 0;
        } else {
            return false;
        }
    });
}

export default octetStringSubstringsMatch;
