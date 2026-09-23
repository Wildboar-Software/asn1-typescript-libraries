import { Buffer } from "node:buffer";
import type SubstringSelection from "../../types/SubstringSelection.mjs";
import type { OctetStringInput } from "../readValue.mjs";
import type {
    OctetSubstringAssertionInput,
    PreparedOctetSubstring,
} from "../readValue.mjs";
import {
    readOctetString,
    readOctetSubstringAssertion,
} from "../readValue.mjs";

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
    value: OctetStringInput,
    _selection?: SubstringSelection,
): boolean {
    return octetStringSubstringsMatchTyped(
        readOctetSubstringAssertion(assertion),
        readOctetString(value),
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
            if (o.octets.length > value.length) {
                return false;
            }
            return Buffer.compare(value.subarray(0, o.octets.length), o.octets) === 0;
        } else if (o.kind === "any") {
            return (buf.indexOf(o.octets) > -1);
        } else if (o.kind === "final") {
            if (o.octets.length > value.length) {
                return false;
            }
            return Buffer.compare(
                value.subarray(value.length - o.octets.length),
                o.octets,
            ) === 0;
        } else {
            return false;
        }
    });
}

export default octetStringSubstringsMatch;
