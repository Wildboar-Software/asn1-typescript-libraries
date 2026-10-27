import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { OctetSubstringAssertion } from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import type { OctetSubstringAssertion_Item } from "../../modules/SelectedAttributeTypes/OctetSubstringAssertion-Item.ta.mjs";
import {
    readOctetSubstringAssertion,
    type OctetSubstringAssertionInput,
    type PreparedOctetSubstring,
} from "../readValue.mjs";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import { matchOctetPieces } from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";

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
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    return matchOctetPieces(assertion, value);
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
    if (!substringAnchorsAreValid(item.strings)) {
        return undefined;
    }
    const out: OctetSubstringAssertion_Item[] = [];
    for (let i = 0; i < item.strings.length; i++) {
        const part = item.strings[i];
        if (ASN1Element.isElement(part)) {
            return undefined;
        }
        if ("control" in part) {
            continue;
        }
        const element = "initial" in part
            ? part.initial
            : "any_" in part
                ? part.any_
                : part.final;
        if (
            element.tagClass !== ASN1TagClass.universal
            || element.tagNumber !== ASN1UniversalType.octetString
            || element.octetString.length === 0
        ) {
            return undefined;
        }
        const octets = element.octetString;
        if ("initial" in part) {
            out.push({ initial: octets });
        } else if ("any_" in part) {
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
 * `assertion` is a `FilterItem` substrings alternative, an element,
 * or an octet substring assertion. `value` is an element or a `Uint8Array`.
 */
export
function octetStringSubstringsMatch (
    assertion: OctetSubstringAssertionInput | FilterItem_substrings,
    value?: ASN1Element | Uint8Array,
    _getEqualityMatcher?: EqualityMatcherGetter,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? octetStringSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    const stored = ASN1Element.isElement(value) ? value.octetString : value;
    return octetStringSubstringsMatchTyped(
        readOctetSubstringAssertion(decoded),
        stored,
    );
}

export default octetStringSubstringsMatch;
