import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import type { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { OctetSubstringAssertion } from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import type { OctetSubstringAssertion_Item } from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion-Item.ta.mjs";
import {
    readOctetSubstringAssertion,
    type OctetSubstringAssertionInput,
    type PreparedOctetSubstring,
} from "../readValue.mjs";
import { matchOctetPieces } from "./matchInOrder.mjs";
import { prepareOctetPieces } from "./prepareSubstring.mjs";
import {
    attachFromFilter,
    classifyFilterSubstrings,
} from "./substringAssertionFromFilter.mjs";

/**
 * `octetStringSubstringsMatch` on pieces and a stored octet string.
 * Pieces are consumed left to right and do not overlap.
 *
 * @param assertion Presented octet pieces.
 * @param value Stored octets.
 * @returns `true` when every piece matches in order.
 */
export
function octetStringSubstringsMatchTyped (
    assertion: readonly PreparedOctetSubstring[],
    value: Uint8Array,
): boolean {
    const pieces = prepareOctetPieces(assertion);
    if (!pieces) {
        return false;
    }
    return matchOctetPieces(pieces, value);
}

/**
 * Convert a DAP substrings filter whose components are `OCTET STRING`
 * into an `OctetSubstringAssertion`. `control` is dropped: this
 * assertion syntax has no control alternative, and these rules ignore it.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component is not octets
 * or the anchors are illegal.
 */
export
function octetStringSubstringsFromFilter (
    item: FilterItem_substrings,
): OctetSubstringAssertion | undefined {
    const classified = classifyFilterSubstrings(item);
    if (!classified) {
        return undefined;
    }
    const out: OctetSubstringAssertion_Item[] = [];
    for (let i = 0; i < classified.length; i++) {
        const part = classified[i];
        if (part.kind === "control") {
            continue;
        }
        if (
            part.element.tagClass !== ASN1TagClass.universal
            || part.element.tagNumber !== ASN1UniversalType.octetString
        ) {
            return undefined;
        }
        const octets = part.element.octetString;
        if (octets.length === 0) {
            return undefined;
        }
        if (part.kind === "initial") {
            out.push({ initial: octets });
        } else if (part.kind === "any") {
            out.push({ any_: octets });
        } else {
            out.push({ final: octets });
        }
    }
    if (out.length === 0) {
        return undefined;
    }
    return out;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.7
 * `octetStringSubstringsMatch`.
 *
 * TRUE when the stored OCTET STRING contains the presented
 * `OctetSubstringAssertion` with the same ordered, non-overlapping
 * partition as the string substring rules.
 *
 * `assertion` is an element or an octet substring assertion.
 * `value` is an element or a `Uint8Array`.
 */
function octetStringSubstringsMatch (
    assertion: OctetSubstringAssertionInput,
    value: ASN1Element | Uint8Array,
): boolean {
    const stored = ASN1Element.isElement(value) ? value.octetString : value;
    return octetStringSubstringsMatchTyped(
        readOctetSubstringAssertion(assertion),
        stored,
    );
}

const octetStringSubstringsRule = attachFromFilter(
    octetStringSubstringsMatch,
    octetStringSubstringsFromFilter,
);

export { octetStringSubstringsRule as octetStringSubstringsMatch };

export default octetStringSubstringsRule;
