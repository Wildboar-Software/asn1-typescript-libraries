import type { ASN1Element } from "@wildboar/asn1";
import { FilterItem_substrings } from "../../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { SubstringAssertion } from "../../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import {
    readSubstringAssertion,
    type PreparedSubstring,
    type SubstringAssertionInput,
} from "../readValue.mjs";
import { matchStringPieces } from "./matchInOrder.mjs";
import { substringAnchorsAreValid } from "./substringAnchors.mjs";
import {
    readTelephoneNumberComponent,
    substringAssertionFromFilter,
} from "./substringAssertionFromFilter.mjs";

/**
 * `telephoneNumberSubstringsMatch` on pieces and a telephone number.
 * Spaces and hyphens are removed from both sides before the scan.
 *
 * @param assertion Presented pieces, still containing spaces and hyphens.
 * @param value Stored telephone number.
 * @returns `true` when the pieces match in order without overlap.
 */
export
function telephoneNumberSubstringsMatchTyped (
    assertion: readonly PreparedSubstring[],
    value: string,
): boolean {
    if (!substringAnchorsAreValid(assertion)) {
        return false;
    }
    const mapped = assertion
        .filter((piece): piece is { kind: "initial" | "any" | "final"; value: string } => (
            piece.kind === "initial" || piece.kind === "any" || piece.kind === "final"
        ))
        .map((piece) => {
            const prepared = piece.value.replace(/[- ]/g, "");
            return prepared ? { kind: piece.kind, value: prepared } : undefined;
        });
    const pieces = mapped.filter((piece): piece is { kind: "initial" | "any" | "final"; value: string } => !!piece);
    const prepared = value.replace(/[- ]/g, "");
    if (pieces.length !== mapped.length || prepared.length === 0) {
        return false;
    }
    return matchStringPieces(pieces, prepared);
}

/**
 * Convert a DAP substrings filter whose components are `TelephoneNumber`
 * into a `SubstringAssertion`.
 *
 * @param item `FilterItem` substrings alternative.
 * @returns The assertion, or `undefined` when a component is not printable.
 */
export
function telephoneNumberSubstringsFromFilter (
    item: FilterItem_substrings,
): SubstringAssertion | undefined {
    return substringAssertionFromFilter(item, readTelephoneNumberComponent);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.9
 * `telephoneNumberSubstringsMatch`.
 *
 * Same ordered, non-overlapping partition as `caseExactSubstringsMatch`,
 * except hyphens and spaces are insignificant. `control` is ignored.
 *
 * `assertion` is a `FilterItem` substrings alternative, an encoded
 * `SubstringAssertion`, or the decoded array. `value` is a printable-string
 * element or a JavaScript string.
 */
export
function telephoneNumberSubstringsMatch (
    assertion: SubstringAssertionInput | FilterItem_substrings,
    value?: ASN1Element | string,
): boolean | undefined {
    const decoded = assertion instanceof FilterItem_substrings
        ? telephoneNumberSubstringsFromFilter(assertion)
        : assertion;
    if (!decoded) {
        return undefined;
    }
    if (value === undefined) {
        return false;
    }
    const stored = typeof value === "string" ? value : value.printableString;
    return telephoneNumberSubstringsMatchTyped(
        readSubstringAssertion(decoded),
        stored,
    );
}

export default telephoneNumberSubstringsMatch;
